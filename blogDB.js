let { Sequelize } = require('sequelize')

let blogDB = new Sequelize('Blogs', 'admin', 'admin', {
    host: 'db.dqlite3',
    dialect: 'sqlite'
})


module.exports = blogDB