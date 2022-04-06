const express = require('express')
// const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
let path = require('path')

const app = express()
app.use("/static", express.static(path.join(__dirname, "public")));
let db = require('./blogDB') // DATABASE
let blogManager = require("./models")
db.sync().then(() => console.log("[ DB CONNECTED SUCCESSFULLY ]"))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


app.get('/', async (req, res) => {
  const articles = await blogManager.findAll()

  // await blogManager.create({
  //   title: 'db 2022',
  //   description: 'this is a description',
  //   markdown: 'this is a markdown 2022\nflvlf,vlf,vlf,v,fvl,flv,fl,vlf,vlf,vfl,v\nfvfvfivfivjfivjfivjf'
  // })

  res.render('articles/index', { articles: articles })
})


app.post('/', async (req, res)=>{ 
  let myform = req.body

  let title = myform.title
  let description = myform.description
  let markdown = myform.markdown

  await blogManager.create({
    title: title,
    description: description,
    markdown: markdown
  })

  res.redirect("/")
})

app.use('/articles', articleRouter)

app.listen(5000)