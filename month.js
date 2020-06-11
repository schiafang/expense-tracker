//得到2020-06格式月份
const date = new Date()
const year = String(date.getFullYear())
const month = String(date.getMonth() + 1)
let monthFormat = ''
if (month.length < 2) monthFormat = '0' + month
const dateFormat = year + '-' + monthFormat



