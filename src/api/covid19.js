import * as request from '@/utils/request'

/**
 * 接口封装
 */
export default {
  getOverall() {
    let url = `/api/covid-19/overall`
    return request.get(url)
  },
  getProvinceDataList() {
    let url = `/api/covid-19/province`
    return request.get(url)
  },
  getDailyList() {
    let url = `/api/covid-19/daily`
    return request.get(url)
  }
}