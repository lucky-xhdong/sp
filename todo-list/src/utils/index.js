/**
 * 格式化日期按yyyy-MM-dd显示
 * timestamp: 时间戳
 * sType: 按类型显示
 */
export function formatDateByTimestamp(timestamp, sType) {
  let str = ''
  const date = new Date(timestamp)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = (date.getDate()).toString().padStart(2, '0')
  const hour = (date.getHours()).toString().padStart(2, '0')
  const minute = (date.getMinutes()).toString().padStart(2, '0')
  const second = (date.getSeconds()).toString().padStart(2, '0')
  switch (sType) {
    case 'yyyy-MM':
      str = `${date.getFullYear()}-${month}`
      break
    case 'yyyy-MM-dd hh:mm:ss':
      str = `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`
      break
    case 'hh:mm:ss':
      str = `${hour}:${minute}:${second}`
      break
    case 'hh:mm':
      str = `${hour}:${minute}`
      break
    default:
      str = `${date.getFullYear()}-${month}-${day}`
  }
  return str
}
