const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// -----Read----- //
router.get('/create', (req, res) => {
  Record.find()
    .lean()
    .then(record => res.render('create', { record }))
    .catch(error => console.log('route error!'))
})

// -----Create----- //
router.post('/create', (req, res) => {
  const body = req.body
  Record.find({ categoryName: { $regex: '' } })
    .lean()
    .then(record => {
      promise = []
      for (let i = 0; i < record.length; i++) {
        promise.push(record[i])
        if (body.category === '支出類別') { body.category = '其他' }
        if (body.category === promise[i].categoryName) { body.icon = promise[i].icon }
      }
      return Record.create(body)
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log('error!'))
})
// -----Update----- //

// -----Delete----- //
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      record.remove()
      res.redirect('/')
    })
    .catch(error => console.log('error!'))
})

module.exports = router