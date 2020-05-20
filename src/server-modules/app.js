const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'pug')
app.set('views', './src/server-modules/views')
app.get('/', (req, res) => { 

    res.send("Hello World!")});
app.get('/index', (req, res) => {res.render('index', {})});
app.get('/user', (req, res)=> {res.render('world',{})});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
