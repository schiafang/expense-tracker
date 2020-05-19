const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/record')

router.get('/', (req, res) => {

  // let totalAmount = 0
  // for (let i = 0; i <= record.length; i++) {
  //   totalAmount += record[i].amount
  // }
  // console.log(totalAmount)
  Record.find()
    .lean()
    .then(record => {

      // let totalAmount = 0
      // for (let i = 0; i <= record.length; i++) {
      //   totalAmount += Number(record[i].amount)
      // }
      // console.log()

      res.render('index', { record })
    })
    .catch(error => console.log('route error!'))
})


module.exports = router