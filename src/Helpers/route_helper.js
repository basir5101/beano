import _ from 'underscore'
import qs from 'qs'

// given a path with querystring params, return the path
export const getPath = (path) => {
  return path && path.split('?')[0] // eslint-disable-line
}

// given a url and a params object, convert to query string
export const toQueryString = (path, params) => {
  if (!path) {
    return null
  }

  path = getPath(path)
  if (params && !_.isEmpty(params)) {
    let queryString = Object.keys(params).filter(
      k => params[k] || !_.isEmpty(params[k])
    ).map(
      k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
    ).join('&')

    path = `${path}${_.isEmpty(queryString) ? '' : '?' }${queryString}`
  }

  return path
}

export const fromQueryString = (url) => {
  if (!url) {
    return null
  }

  const search = url.split('?')[1] // eslint-disable-line
  return qs.parse(search)
}
