const express = require('express')
const ejs = require('ejs')
const router = require('./src/routes/index.routes')
const authRouter = require('./src/routes/auth.routes')
const db = require('./src/config/db')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// env
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

// setup ejs
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

try {
    db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

// konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 259200000 // 3 days
    }
}))
app.use(flash())

app.get('/', (req, res) => res.redirect('/login'))

app.use('/', router, authRouter)

app.listen(port, () => console.log(`Run in http://localhost:${port}`))