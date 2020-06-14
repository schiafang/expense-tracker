const Record = require('../../models/record')
module.exports = {
  dateFormat: date => {
    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1)
    let monthFormat = ''
    if (month.length < 2) monthFormat = '0' + month
    if (month.length === 2) monthFormat = month
    const dateFormat = year + '-' + monthFormat
    return dateFormat
  },
  getTotalAmount: record => {
    let totalAmount = 0
    const promise = []
    for (let i = 0; i < record.length; i++) {
      promise.push(record[i])
      totalAmount += Number(promise[i].amount)
    }
    const numberFormat = totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return numberFormat
  },
  getCategoryAmount: record => {
    const categorie = { '餐飲食品': 0, '家居物業': 0, '交通出行': 0, '休閒娛樂': 0, '其他': 0 }
    record.forEach(item => {
      categorie[item.category] += item.amount
    })
    return Object.values(categorie)
  }
}