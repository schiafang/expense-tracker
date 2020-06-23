const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const { dateFormat, getTotalAmount, getCategoryAmount } = require('../../public/javascripts/function')

router.get('/', (req, res) => {
  const userId = req.user._id
  const selectMonth = req.query.months
  const selectCategory = req.query.categories
  const months = [] //選單月份
  const categories = ['餐飲食品', '休閒娛樂', '家居物業', '交通出行', '其他']
  const startDate = selectMonth + '-00'
  const endDate = selectMonth + '-31'

  console.log(req.query)

  Record.find({ userId }) // 搜尋全部資料得到有支出的月份來渲染月份選單
    .then(record => {
      record.forEach(item => {
        const dateResult = new Date(item.date)
        const monthFormat = dateFormat(dateResult)
        if (months.includes(monthFormat)) return
        months.push(monthFormat)
      })
    })

  Record.find({ userId, date: { $gte: startDate, $lt: endDate }, category: { $regex: selectCategory } })
    .lean()
    .then(record => {
      categoryAmount = getCategoryAmount(record) //甜甜圈表的金額
      const totalAmountFormat = getTotalAmount(record)  //總金額
      res.render('index', { record, months, selectMonth, categories, selectCategory, totalAmountFormat, categoryAmount })
    })
})

module.exports = router