import axios from 'axios'
import { newKey } from './data'

// 知乎API
export function fetchLastestNews () {
  return axios.get('https://www.reckful.net/api/4/news/latest')
}

export function fetchThemes () {
  return axios.get('https://www.reckful.net/api/4/themes')
}

export function fetchBeforeNews (date) {
  return axios.get('https://www.reckful.net/api/4/news/before/' + date)
}

export function fetchNewsContent (id) {
  return axios.get('https://www.reckful.net/api/4/news/' + id)
}

export function fetchStoryExtra (id) {
  return axios.get('https://www.reckful.net/api/4/story-extra/' + id)
}

export function fetchShortComments (id) {
  return axios.get('https://www.reckful.net/api/4/story/' + id + '/short-comments')
}

export function fetchBeforeComments (id, lastId) {
  return axios.get('https://www.reckful.net/api/4/story/' + id + '/short-comments/before/' + lastId)
}

export function fetchThemesList (id) {
  return axios.get('https://www.reckful.net/api/4/theme/' + id)
}

// 聚合API
/*
*   类型type:top(头条，默认),shehui(社会),guonei(国内),guoji(国际),
*   yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
*/
export function fetchNewsData (type) {
  return axios.get('api/toutiao/index?type=' + type + '&key=' + newKey)
}
