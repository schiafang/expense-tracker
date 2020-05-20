const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/record')

router.get('/', (req, res) => {
  const filter = '全部支出'
  Record.find({ name: { $regex: '' } })
    .lean()
    .then(record => {
      let totalAmount = 0
      const promise = []
      for (let i = 0; i < record.length; i++) {
        promise.push(record[i])
        totalAmount += Number(promise[i].amount)
      }
      res.render('index', { record, totalAmount, filter })
    })
    .catch(error => console.log('route error!'))
})

module.exports = router