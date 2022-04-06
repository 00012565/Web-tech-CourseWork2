let { DataTypes } = require('sequelize')

let db = require('./blogDB')
let blogs = db.define('Blogs',{
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    title:{
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.STRING,
    },
    markdown: {
        type: DataTypes.STRING,
    }

},{
    tableName: 'Blogs'
})

module.exports = blogs