import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { FlatList, RefreshControl, View, TouchableOpacity, Alert } from 'react-native'
import Text from '../Text'
import { set } from 'lodash'

import { authStore, languageStore, confirmationModalStore, themeStore } from 'Stores/StoreFactory'

import styles from './styles'

const LIMIT_PER_CALL = 20

const Loader = ({ RowComponent, numberOfLoaders, numColumns, }) => {
  return (
    <View style={{ flexDirection: numColumns === 1 ? 'column' : 'row' }}>
      {new Array(numberOfLoaders).fill(null).map((_, index) => (
        <RowComponent.Loader key={`loader_${index}`} />
      ))}
    </View>

  )
}

Loader.propTypes = {
  RowComponent: PropTypes.object.isRequired,
  numberOfLoaders: PropTypes.number,
  numColumns: PropTypes.number
}

Loader.defaultProps = {
  numberOfLoaders: 3,
  numColumns: 1,
}

const List = observer((props) => {
  const TEXTS = languageStore.textLocale
  const [items, setItems] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)

  const RowComponent = props.rowComponent
  const canLoadMore = items.length > 0 && items.length % LIMIT_PER_CALL === 0
  const COLORS = themeStore.colors
  const STYLES = styles(COLORS)
  const apiService = new props.apiService(authStore)

  const loadItems = async ({ reset = false }) => {
    const { presenter, extraApiProps, onApiCallBack } = props

    if (reset) {
      setRefreshing(true)
    } else {
      setLoadingMore(true)
    }

    let newData = await apiService.list({
      limit: LIMIT_PER_CALL,
      offset: reset ? 0 : items.length,
      ...extraApiProps,
    })
    if (newData) {
      onApiCallBack && onApiCallBack(newData)

      if (presenter) {
        newData = new presenter(newData.items ? newData.items : newData).present()
      }

      if (newData && newData.items) {
        if (reset) {
          setItems(newData.items)
        } else {
          setItems([...items, ...newData.items])
        }

        setRefreshing(false)
        setLoadingMore(false)
      } else {
        setItems([])
        setRefreshing(false)
        setLoadingMore(false)
        confirmationModalStore.error('Error loading data')
      }
    } else {
      setItems([])
      setRefreshing(false)
      setLoadingMore(false)
    }
  }

  const onRefresh = async () => {
    await loadItems({ reset: true })
  }

  const updateItem = (index, path, value) => {
    let clonedItems = Object.assign([], items)
    let paths = `[${index}].${path}`

    set(clonedItems, paths, value)
    setItems(clonedItems)
  }

  useEffect(() => {
    onRefresh()
  }, [props.extraApiProps, authStore.isAuthenticated, props.lastModifiedAt])

  useEffect(() => {
    if (refreshing) {
      setItems([{ id: 'loader' }])
    }
  }, [refreshing])


  const renderLoadMore = () => {
    if (!canLoadMore || items.length === 0) {
      if (props.ListEmptyComponent) {
        return null
      }

      return (
        <Text style={STYLES.noMoreRequestsText}>
          {TEXTS.general.noMore}
        </Text>
      )
    }

    if (loadingMore) {
      return (
        <Loader
          RowComponent={RowComponent}
          numColumns={props.horizontal ? 2 : props.numColumns}
          numberOfLoaders={2} />
      )
    }

    return null
    // return (
    //   <View style={STYLES.loadMoreContainer}>
    //     <TouchableOpacity
    //       style={STYLES.loadMoreButton}
    //       onPress={loadItems}>
    //       <Text style={STYLES.loadMoreText}>{TEXTS.general.loadMore}</Text>
    //     </TouchableOpacity>
    //   </View>
    // )
  }

  const { listEmptyWhenLengthIs = 0 } = props
  return (
    <FlatList
      style={STYLES.list}
      data={items}
      keyExtractor={item => `list_row_${refreshing}_${item.id}`}
      ListHeaderComponent={() => listEmptyWhenLengthIs > 0 && listEmptyWhenLengthIs === items.length && !refreshing && (
        <Text style={STYLES.noMoreRequestsText}>
          {TEXTS.general.noResults}
        </Text>
      )}
      refreshControl={
        <RefreshControl
          id='refreshConrol'
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[COLORS.pink]}
          tintColor={COLORS.pink}
        />
      }
      renderItem={({ item, index }) => {
        if (refreshing) {
          return <Loader
            RowComponent={RowComponent}
            numColumns={props.horizontal ? 2 : props.numColumns}
          />
        }

        return (
          <RowComponent.Row
            navigation={props.navigation}
            item={item}
            lastItem={index === items.length - 1}
            updateItem={(field, value) => updateItem(index, field, value)}
            key={`list_row_${item.id}`}
            apiService={apiService}
            {...props.extraComponentProps}
          />
        )
      }}
      ListFooterComponent={
        canLoadMore && !refreshing && renderLoadMore()
      }
      onEndReached={async () => canLoadMore && !refreshing && await loadItems({})}
      scrollEventThrottle={16}
      maxToRenderPerBatch={30}
      updateCellsBatchingPeriod={500}
      {...props}
      ListEmptyComponent={!refreshing && props.ListEmptyComponent ? props.ListEmptyComponent : null}
    />
  )
})

List.propTypes = {
  rowComponent: PropTypes.object.isRequired,
  apiService: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  extraApiProps: PropTypes.object,
  extraComponentProps: PropTypes.object,
  refreshOnFocus: PropTypes.bool,
  presenter: PropTypes.func,
  numColumns: PropTypes.number,
  horizontal: PropTypes.bool,
  onApiCallBack: PropTypes.func,
  lastModifiedAt: PropTypes.instanceOf(Date),
}

List.defaultProps = {
  extraApiProps: {},
  refreshOnFocus: false,
  numColumns: 1,
  horizontal: false
}

export default List
