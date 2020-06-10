const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const record = require('./modules/record')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/', authenticator, home)
router.use('/record', authenticator, record)

module.exports = router