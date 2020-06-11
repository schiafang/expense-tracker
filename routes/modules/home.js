const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const { numberFormat, dateFormat } = require('../../public/javascripts/function')

router.get('/', (req, res) => {
  const filter = '全部支出'
  const userId = req.user._id
  Record.find({ name: { $regex: '' }, userId })
    .lean()
    .sort({ _id: 'desc' })
    .then(record => {
      // totalAmount Format
      let totalAmount = 0
      const promise = []
      for (let i = 0; i < record.length; i++) {
        promise.push(record[i])
        totalAmount += Number(promise[i].amount)
      }
      let totalAmountFormat = numberFormat(totalAmount)

      // months filter
      const months = []
      record.forEach(item => {
        const dateResult = new Date(item.date)
        const monthFormat = dateFormat(dateResult)
        if (months.includes(monthFormat)) return
        months.push(monthFormat)
      })

      res.render('index', { record, totalAmountFormat, filter, months })
    })
    .catch(error => console.log('route error!'))
})

module.exports = router