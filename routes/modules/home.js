const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

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
      let aLittleAmount = false
      let lessAmount = false
      let mediumAmount = false
      let tooMuchAmount = false
      if (totalAmount > 1000) { aLittleAmount = true }
      if (totalAmount > 5000) { lessAmount = true }
      if (totalAmount > 10000) { mediumAmount = true }
      if (totalAmount > 50000) { tooMuchAmount = true }
      res.render('index', { record, totalAmount, filter, aLittleAmount, lessAmount, mediumAmount, tooMuchAmount })
    })
    .catch(error => console.log('route error!'))
})

module.exports = router