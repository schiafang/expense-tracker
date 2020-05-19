const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('MongoDB connected recordSeeder!')
  const promise = []
  promise.push(Record.create(
    {
      name: '午餐',
      category: '餐飲食品',
      date: '2020-5-18',
      amount: 120,
    },
    {
      name: '晚餐',
      category: '餐飲食品',
      date: '2020-5-18',
      amount: 180,
    },
    {
      name: '電影',
      category: '休閒娛樂',
      date: '2020-5-18',
      amount: 180,
    },
    {
      name: '捷運',
      category: '交通出行',
      date: '2020-5-18',
      amount: 80,
    },
    {
      name: '房租',
      category: '家居物業',
      date: '2020-5-18',
      amount: 10000,
    }
  ))
  Promise.all(promise).then(() => {
    console.log('done to run recordSeeder')
    db.close()
  })
})