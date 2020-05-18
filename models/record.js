const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  // 支出名稱：name
  // 類別：category
  // 日期：date
  // 金額：amount
  // 在首頁看到的總金額：totalAmount
  name: {
    type: String,
    require: true
  },
  category: String,
  date: String,
  amount: Number,
  totalAmount: String
})

module.exports = mongoose.model('Record', recordSchema)
