const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('MongoDB connected recordSeeder!')

  const promise = []
  promise.push(Record.create(
    {
      name: '午餐',
      category: '餐飲食品',
      date: '2020-05-18',
      amount: 120,
      icon: '<i class="fas fa-utensils"></i>'
    },
    {
      name: '電影',
      category: '休閒娛樂',
      date: '2020-05-18',
      amount: 180,
      icon: '<i class="fas fa-grin-beam"></i>'
    },
    {
      name: '捷運',
      category: '交通出行',
      date: '2020-05-18',
      amount: 80,
      icon: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      name: '信用卡費',
      category: '其他',
      date: '2020-05-18',
      amount: 5600,
      icon: '<i class="fas fa-pen"></i>'
    },
    {
      name: '房租',
      category: '家居物業',
      date: '2020-05-18',
      amount: 10000,
      icon: '<i class="fas fa-home"></i>'
    }
  ))
  Promise.all(promise).then(() => {
    db.close()
  })
})