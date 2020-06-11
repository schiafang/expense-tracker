module.exports = {
  numberFormat: number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  dateFormat: date => {
    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1)
    let monthFormat = ''
    if (month.length < 2) monthFormat = '0' + month
    const dateFormat = year + '-' + monthFormat
    return dateFormat
  }
}

