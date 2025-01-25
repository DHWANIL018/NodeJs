// Shree Ganeshay namah 

const express = require('express')
const PORT = 8000
const app = express()

app.get('/',(req,res)=>{
    console.log("first")
})

app.listen(PORT,()=>{
    console.log(`Your PORT Number is ${PORT}`)
})



