const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const route = require('./routes/index')
const session = require('express-session')
const usePassport = require('./config/passport')
const flash = require('connect-flash')
if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

require('./config/mongoose')

const app = express()
const PORT = process.env.PORT

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use((bodyParser.urlencoded({ extended: true })))
app.use(methodOverride('_method'))

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.alertMsg = req.flash('alertMsg')
  res.locals.successMsg = req.flash('successMsg')
  next()
})
app.use(route)

app.listen(PORT, () => console.log(`Expense-tracker is running on http://localhost:${PORT}`))
