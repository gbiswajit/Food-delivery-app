const express = require('express')
const app = express()
const Pizza=require('./models/pizzaModel')
const db=require('./db')

app.use(express.json())
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getpizzas', (req,res)=>{
    Pizza.find({}, (err, docs)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(docs)
        }
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))