const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('MongoDB connected category!')

  const promise = []
  promise.push(Record.create(
    {
      categoryName: '家居物業',
      icon: '<i class="fas fa-home"></i>'
    },
    {
      categoryName: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      categoryName: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>'
    },
    {
      categoryName: '餐飲飲食',
      icon: '<i class="fas fa-utensils"></i>'
    },
    {
      categoryName: '其他',
      icon: '<i class="fas fa-pen"></i>'
    }
  ))
  Promise.all(promise).then(() => {
    db.close()
  })
})