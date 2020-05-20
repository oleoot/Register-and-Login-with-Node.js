const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express()
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

// // EJS
// app.use(expressLayouts)






const PORT = 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`))
