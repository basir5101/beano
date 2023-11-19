import { observable, action, toJS } from 'mobx'
import _ from 'underscore'

import Store from './Store'

const DEFAULT_LIMIT = 10

class PaginatingStore extends Store {
  @observable loadingMore = null
  @observable offset = 0
  @observable items = null
  @observable refreshing = true

  cache = {}

  constructor(authStore, limit) {
    super({ authStore })

    this.limit = limit || DEFAULT_LIMIT
  }

  // return the caching key
  // given a offset and limit
  getKey(offset, limit) {
    return `${offset}_${limit}`
  }

  // clear the cache and reset the offset
  @action reset(clearItems = true) {
    this.offset = 0
    this.cache = {}
    this.loadingMore = false

    if (clearItems) {
      this.results = null
    }
  }

  @action setResults(results) {
    this.offset = 0
    this.cache[this.getKey(this.offset, this.limit)] = true
    this.results = results
    this.offset = this.offset + this.limit
  }

  @action appendResults(results) {
    // set current offset as cached, save results, and switch to next offset
    this.cache[this.getKey(this.offset, this.limit)] = true
    this.results = [...this.results || [], ...results]
    this.results = _.uniq(this.results, 'id')

    this.offset = this.offset + this.limit
  }

  getResultsFn() {
    const err = { error: 'PaginatingStore: getResultsFn(params, saveResults) not implemented' }
    throw err
  }

  @action async onEndReached(params) {
    // when we have no limit, the whole data will have loaded
    // so there's no need to append on end reached
    if (!this.limit) {
      return
    }

    let cached = this.cache[this.getKey(this.offset, this.limit)]
    if (!cached) {
      if (!_.isEmpty(toJS(this.results))) {
        this.loadingMore = true

        await this.getResultsFn({
          ...params,
          limit: this.limit,
          offset: this.offset,
        })

        this.loadingMore = false
      }
    }
  }
}

export default PaginatingStore
