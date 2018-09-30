const mysql = require('mysql')
const config = require('../config/default.js')
console.log(config.database.USERNAME)
let pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE,
  port     : config.database.PORT
})

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            let results = JSON.stringify(rows)
            results = JSON.parse(results)
            resolve(results)
          }
          connection.release()
        })
      }
    })
  })

}


// let query = function( sql, values ) {
// pool.getConnection(function(err, connection) {
//   // 使用连接
//   connection.query( sql,values, function(err, rows) {
//     // 使用连接执行查询
//     console.log(rows)
//     connection.release()
//     //连接不再使用，返回到连接池
//   })
// })
// }

let users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     username VARCHAR(100) NOT NULL COMMENT '用户名',
     password VARCHAR(100) NOT NULL COMMENT '密码',
     avator VARCHAR(100) NOT NULL COMMENT '头像',
     moment VARCHAR(100) NOT NULL COMMENT '注册时间',
     PRIMARY KEY ( id )
    )`

let createTable = ( sql ) => {
  return query( sql, [] )
}

// 建表
createTable(users)
// 注册用户
// 查找用户
let findUser = (username) => {
  var _sql = `SELECT * FROM users WHERE username="${username}"; `
  return query( _sql )
}

let checkPassword = (username, password) => {
  var _sql = `SELECT * FROM users WHERE username="${username}" AND password= "${password}"; `
  return query( _sql )
}

module.exports = {
  findUser,
  checkPassword
}



