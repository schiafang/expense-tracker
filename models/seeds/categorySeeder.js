const Category = require('../record')
const db = require('../../config/mongoose')
db.once('open', () => {
  console.log('MongoDB connected category!')
  Record.create(
    {
      category: {
        name: '家居物業',
        icon: '<i class="fas fa-home"></i>'
      }
    },
    {
      category: {
        name: '交通出行',
        icon: '<i class="fas fa-shuttle-van"></i>'
      }
    },
    {
      category: {
        name: '休閒娛樂',
        icon: '<i class="fas fa-grin-beam"></i>'
      }
    },
    {
      category: {
        name: '餐飲飲食',
        icon: '<i class="fas fa-utensils"></i>'
      }
    },
    {
      category: {
        name: '其他',
        icon: '<i class="fas fa-pen"></i>'
      }
    },

  )
})