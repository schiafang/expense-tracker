const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

router.get('/login', (req, res) => {
  res.render('login', { userStyle: true })
})

router.get('/password', (req, res) => {
  res.render('password', { userStyle: true })
})

router.get('/register', (req, res) => {
  res.render('register', { userStyle: true })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/users/login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))

router.post('/register', (req, res) => {
  const errorMsg = []
  const { username, email, password } = req.body
  if (errorMsg.length !== 0) {
    console.log(errorMsg)
    return res.render('register', { errorMsg, username, email, password })
  }
  User.findOne({ email })
    .then(user => {
      if (user) {
        errorMsg.push({ message: '此電子信箱已被註冊' })
        return res.render('register', { errorMsg, username, email, password, userStyle: true })
      }
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({ username, email, password: hash }))
        .then(() => {
          req.flash('successMsg', '🎉  註冊成功，請登入開始使用')
          res.redirect('/users/login')
        })
        .catch(error => console.log('error'))
    })
})

module.exports = router