const express = require('express')
const app = express()
const cors= require('cors')
const port = 5000
// jwt 토큰생성모듈
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.urlencoded({ extended: true })); //req.body 보려고 추가햇음
app.use(express.json())     //req.body 보려고 추가햇음


app.get('/', (req, res) => {
    res.send('<h1>test</h1>')
  })
app.post('/login', (req, res) => {
    console.log(req.body); //req 
    let token = jwt.sign({ id: req.body.id }, 'abcd');
    res.send(token) //브라우저가 token을 받음 
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})