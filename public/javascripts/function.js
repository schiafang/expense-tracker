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
  }
}

