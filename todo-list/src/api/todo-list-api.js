import request from '../utils/request'

export function getTodoList(params) {
  return request({
    url: 'https://m.133.cn/fadeapi/dictionary/getWotypeAndCategory?ssoUserId=3937',
    method: 'get',
    params: params
  })
}
