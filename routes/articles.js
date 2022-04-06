const express = require('express')
const router = express.Router()
let db = require('../blogDB') // DATABASE
let blogManager = require("../models")
db.sync().then(() => console.log("[ DB CONNECTED SUCCESSFULLY ]"))


router.get('/edit/:id', async (req, res) => {
  const article = await blogManager.findOne({
    where: {
      id: req.params.id
    }
  })
  res.render('articles/edit', { article: article })
})





router.post('/:id', async (req, res) => {
  await blogManager.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect('/')
})

router.post('/save/:id', async (req, res) => {
  let blogID = req.params.id
  let form = req.body
  await blogManager.update(
    {
        title: form.title,
        description: form.description,
        markdown: form.markdown
    },
    {
        where: {
          id: blogID,
        },
    }
    );
  res.redirect('/articles/edit/' +  blogID)
})



module.exports = router