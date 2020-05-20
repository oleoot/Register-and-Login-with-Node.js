const express = require('express');
const app = express()
const bcrypt = require('bcryptjs')
const users = [];
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.use(express.urlencoded({ extended: false }))
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/login', (req, res) => {

})


app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch{
        res.redirect('/register')
    }
    console.log(users)
})







const PORT = 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`))
