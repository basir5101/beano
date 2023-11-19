/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { TextInput, CountryPicker } from '@sowlutions-tech/crowdmouth-react-native-library'
import { languageStore, themeStore, authStore, } from 'Stores/StoreFactory'

import styles from './styles'

const RedeemModal = ({ item, saveValues }: { item: { id: number; reward_type: Object }, saveValues: any }) => {
  const { redeem } = languageStore.textLocale
  const STYLES = styles(themeStore.colors)
  const { reward_type, description } = item

  const { address_line_1, address_line_2, zipcode, phone_number, city, country } = authStore.user
  const [data, setData] = useState({
    reward_id: item.id,
    address_line_1,
    address_line_2,
    zipCode: zipcode,
    state: city,
    phone_number,
    instructions: '',
    country
  })

  const fields = [
    { hidden: reward_type !== 'physical', field: 'address_line_1' },
    { hidden: reward_type !== 'physical', field: 'address_line_2' },
    [
      { hidden: reward_type !== 'physical', field: 'zipCode', myStyle: STYLES.zipCodeInput, fieldStyle: STYLES.zipCodeView },
      { hidden: reward_type !== 'physical', field: 'state', myStyle: STYLES.stateInput, fieldStyle: STYLES.stateInputView },
    ],
    { hidden: reward_type !== 'physical', field: 'phone_number' },
    { hidden: false, field: 'instructions', textArea: true },
  ]

  const setValue = (field: string, value: any) => {
    const myData = Object.assign({}, data)
    myData[field] = value

    setData(myData)
    saveValues(myData)
  }

  useEffect(() => {
    return saveValues(data)
  })

  return (
    <ScrollView>
      <View style={STYLES.inputView}>
        {reward_type === 'physical' && <CountryPicker
          style={STYLES.input}
          field={'country'}
          value={data.country}
          placeholder={redeem.country}
          setValue={setValue}
        />
        }
        {fields.map(item => {
          if (item.hidden) {
            return null
          }

          return (
            Array.isArray(item)
              ? <View style={STYLES.row}>
                {item.map(innerItem =>
                  innerItem.hidden
                    ? null
                    : <TextInput
                      key={`input_${innerItem.field}`}
                      hasBorder={true}
                      value={data[innerItem.field]}
                      containerStyle={innerItem.myStyle}
                      onChangeText={setValue}
                      placeholder={redeem[innerItem.field]}
                      {...innerItem}
                    />
                )}
              </View>
              : <TextInput
                key={`input_${item.field}`}
                hasBorder={true}
                value={data[item.field]}
                containerStyle={item.textArea ? STYLES.textArea : STYLES.input}
                onChangeText={setValue}
                // placeholder={redeem[item.field]}
                placeholder={description}
                {...item}
              />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default RedeemModal
