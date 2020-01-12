/**
 * request 请求
 */
function request(obj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: obj.url,
      data: obj.params || {},
      header: {
        'content-type': 'application/json'
      },
      method: obj.method,
      success(res) {
        if (res && res.statusCode === 200) {
          // 200: 服务端业务处理正常结束
          wx.showLoading({
            title: '加载中',
            duration: 2000
          })
          resolve(res.data)
        } else {
          reject(res.data)
          wx.showToast({
            title: '请求失败',
            icon: 'error',
            duration: 2000
          })
        }
      },
      fail(res) {
        reject(res.data)
        wx.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 2000
        })
      }
    })
  })
}
export default request
