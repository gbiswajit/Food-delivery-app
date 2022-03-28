const mongoose=require('mongoose')

var mongoURL='mongodb+srv://biswajit:biswajit2406@cluster0.pc7rz.mongodb.net/mern-pizza'

mongoose.connect(mongoURL)

var db=mongoose.connection

db.on('connected', ()=>{
    console.log("Database Connected!")
})

db.on('error', ()=>{
    console.log("Connection Failed!")
})
module.exports = mongoose