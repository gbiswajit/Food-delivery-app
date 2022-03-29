const express = require('express')
const app = express()
const Pizza=require('./models/pizzaModel')
const db=require('./db')
const pizzasRoute=require('./routes/pizzaRoute')

app.use(express.json())
const port = 5000

app.use('/api/pizzas', pizzasRoute)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))