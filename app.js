const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const route = require('./routes/index')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use((bodyParser.urlencoded({ extended: true })))
app.use(methodOverride('_method'))
app.use(route)

app.listen(PORT, () => console.log(`Expense-tracker is running on http://localhost:${PORT}`))
