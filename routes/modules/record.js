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
  Record.create(record)
    .then(() => res.redirect('/'))
    .catch(error => console.log('error!'))
})

// -----Update----- //

// -----Delete----- //

module.exports = router