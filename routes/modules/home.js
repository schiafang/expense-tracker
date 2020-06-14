const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const { dateFormat, getTotalAmount, getCategoryAmount } = require('../../public/javascripts/function')

router.get('/', (req, res) => {
  const filter = '全部支出'
  const userId = req.user._id
  const username = req.user.username
  const promises = []
  let categoryAmount = []
  promises.push(
    Record.find({ name: { $regex: '' }, userId })
      .then(record => categoryAmount = getCategoryAmount(record))
  )
  Promise.all(promises).then(() => {
    Record.find({ name: { $regex: '' }, userId })
      .lean()
      .sort({ _id: 'desc' })
      .then(record => {
        // category amount
        categoryAmount
        // total amount format
        const totalAmountFormat = getTotalAmount(record)
        // get month filter
        const months = []
        record.forEach(item => {
          const dateResult = new Date(item.date)
          const monthFormat = dateFormat(dateResult)
          if (months.includes(monthFormat)) return
          months.push(monthFormat)
        })
        // if no expense page render
        let noExpense = false
        if (record.length === 0) noExpense = true
        // render page
        res.render('index', { record, totalAmountFormat, filter, months, noExpense, username, categoryAmount })
      })
      .catch(error => console.log('route error!'))
  })
})

module.exports = router