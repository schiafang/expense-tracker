const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const CategorySchema = new Schema({
//   name: String,
//   icon: String
// })
// const RecordSchema = new Schema({
//   name: {
//     type: String,
//     require: true
//   },
//   category: [CategorySchema],
//   date: Date,
//   amount: Number,
//   totalAmount: String,
// })


const RecordSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  category: String,
  date: String,
  amount: Number,
  totalAmount: String,
})
module.exports = mongoose.model('Record', RecordSchema)
