const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

router.get('/login', (req, res) => {
  res.render('login', { userStyle: true })
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
  failureRedirect: '/users/register'
}))

router.post('/register', (req, res) => {
  const { username, email, password, confirmPassword } = req.body
  return bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(password, salt))
    .then(hash => User.create({ username, email, password: hash }))
    .then(user => console.log(user))
    .then(() => res.redirect('/users/login'))
    .catch(error => console.log('error'))
})

module.exports = router