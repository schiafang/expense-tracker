const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('MongoDB connected category!')
  const promise = []
  promise.push(Record.create(
    {
      categoryname: '家居物業',
      icon: '<i class="fas fa-home"></i>'
    },
    {
      categoryname: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      categoryname: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>'

    },
    {
      categoryname: '餐飲飲食',
      icon: '<i class="fas fa-utensils"></i>'

    },
    {
      categoryname: '其他',
      icon: '<i class="fas fa-pen"></i>'
    }
  ))
  Promise.all(promise).then(() => {
    console.log('done to run categorySeeder')
    db.close()
  })
})