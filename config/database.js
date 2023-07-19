const mysql = require('mysql2')
let con;

class Database{
    Connect() {
        return new Promise((resolve, reject) => {
            con = mysql.createConnection({
                user:'root',
                host:'localhost',
                database:'sys',
                password:'yash123'
            })
            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                });
            // return con;
            return resolve(con)
        })
    }
    custom(query){
        return new Promise((resolve, reject) => {
            console.log(`\nCustom query ->> ${query}`);

            con.query(query, (error, results) => {
              if (error) {
                console.log(`\nCustom error ->> ${error}`);
                return reject("SOMETHING_WENT_WRONG");
              } else {
                console.log(results)
                return resolve(results);
              }
            });
          });
    }
}

module.exports = new Database();











// const { createPool}= require ('mysql2')


// const pool= createPool({

//     user:'root',
//     host:'localhost',
//     database:'sys',
//     password:'yash123',
    
//     // PORT: 3306

// })

// pool.query(`SELECT * FROM users`,(error,result,field)=>{
//     if (error){
//         return console.log(error);
//     }
//     return console.log(result)
    

// })

// module.exports= pool;