const express=require('express')
const app=express()
const port=5500;
const path=require('path')

app.set('view engine','ejs')
//how to access folders
app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))
//folder rename
app.use('/profile',express.static('public/images'))

app.get('/',(req,res)=>{
   // res.send("Jay Shree Ram") 
    res.render('pages/Home',{
        title:"home"
    })
})
app.get('/about',(req,res)=>{
    //res.send("Good Morning")
    res.render('pages/About',{
        title:"about"
    })
})
app.get('/Contact',(req,res)=>{
    //res.send("Good Morning")
    res.render('pages/Contact',{
        title:"Contact"
    })
})
app.get('/blog',(req,res)=>{
    //res.send("Good Morning")
    res.render('pages/Blog',{
        title:"Blog"
    })
})

app.listen(port,()=>console.log(`Example app listening port http://localhost:${port}`))