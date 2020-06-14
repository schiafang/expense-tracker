const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const { dateFormat, getTotalAmount, getCategoryAmount } = require('../../public/javascripts/function')


// -----Read----- //
router.get('/create', (req, res) => {
  res.render('new')
})

router.get('/category', (req, res) => {
  const filter = req.query.filter
  const userId = req.user._id
  if (filter.length === 0) { return res.redirect('/') }

  console.log(categoryAmount)
  Record.find({ category: `${req.query.filter}`, userId })
    .lean()
    .then(record => {
      const totalAmountFormat = getTotalAmount(record)
      const months = []
      record.forEach(item => {
        const dateResult = new Date(item.date)
        const monthFormat = dateFormat(dateResult)
        if (months.includes(monthFormat)) return
        months.push(monthFormat)
      })
      res.render('index', { record, totalAmountFormat, filter, months })
    })
    .catch(error => console.log('error!'))
})

router.get('/months', (req, res) => {
  const userId = req.user._id
  const month = req.query.months
  const months = []
  const promises = []
  let categoryAmount = []
  promises.push(
    Record.find({ date: { $regex: month }, userId })
      .then(record => categoryAmount = getCategoryAmount(record))
  )
  Promise.all(promises).then(() => {
    Record.find({ userId }) // 搜尋全部資料得到分類
      .then(record => {
        record.forEach(item => {
          const dateResult = new Date(item.date)
          const monthFormat = dateFormat(dateResult)
          if (months.includes(monthFormat)) return
          months.push(monthFormat)
        })
      })
    Record.find({ date: { $regex: month }, userId })  // 渲染選擇的月份
      .lean()
      .then(record => {
        const totalAmountFormat = getTotalAmount(record)
        res.render('index', { record, totalAmountFormat, months, categoryAmount })
      })
      .catch(error => console.log('error!'))
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then(record => { res.render('edit', { record }) })
    .catch(error => console.log('error!'))
})

// -----Create----- //
router.post('/create', (req, res) => {
  const body = req.body
  body.userId = req.user._id
  Record.find()
    .lean()
    .then(record => {
      promise = []
      for (let i = 0; i < record.length; i++) {
        promise.push(record[i])
        if (body.category === '支出類別') { body.category = '其他' }
        if (body.merchant === '') { body.merchant = '其他' }
        if (body.category === promise[i].categoryName) { body.icon = promise[i].icon }
      }
      return Record.create(body)
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log('error!'))
})

// -----Update----- //
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  req.body.amount = Number(req.body.amount)
  Record.find({ categoryName: req.body.category })
    .then(record => { req.body.icon = record[0].icon })
  return Record.findOne({ _id, userId })
    .then(record => {
      record = Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log('error!'))
})

// -----Delete----- //
router.delete('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Record.findOne({ _id, userId })
    .then(record => {
      record.remove()
      res.redirect('/')
    })
    .catch(error => console.log('error!'))
})

module.exports = router