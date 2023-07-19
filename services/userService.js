// const database = require("../config/database");
// let db = database.databaseConnect();
const bcrypt = require('bcrypt')
const db = require('../config/database')
const jwt = require('jsonwebtoken');
const auth_token = require('jsonwebtoken')

const moment = require('moment-timezone');
const { error } = require('../util/response');
const uservalidation = require('../validation/userValidation');
const { verifyToken } = require('../validation/userValidation');


class Service{
    registration(body,headers){
        return new Promise(async (resolve, reject) => {
            try {
                let {
                    name,email,phone,password
                } = body
                let date = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
                const hashPassword = await bcrypt.hash(password,10);
                console.log("hashing password ---->>>",hashPassword)
                // const connection = await mysql.createConnection(config.mysqlDB)
                let user = await db.custom(`INSERT INTO users (name,email,phone,password,created_date,modified_date) VALUES ('${name}','${email}','${phone}','${hashPassword}','${date}','${date}')`)
               
                .then(result => {
                    return result
                  })
                  .catch(err => {
                    console.log(err)
                  })

                  console.log("user===========>",user)
                  return resolve()
                
       
                
            } catch (error) {
                return reject(error)
            } 
            })
    }

    login(body,headers){
        return new Promise(async(resolve, reject) => {
            try {
                let {
                    phone,password
                } = body;
                let user= await db.custom(`SELECT id,name,email, password, created_date, modified_date FROM users WHERE phone='${phone}'`)
                    console.log('user=============>', user)
                if(user.length==0){
                    throw {status:400, message:'phone number is does not exist'}
                }
                bcrypt.compare(`${password}`,user[0].password)
                .then(results=>{
                if (results==true) {                                           
                    console.log(" Login Successful")
                const auth_token  = jwt.sign(
                    { user_id:  phone },
                    process.env.jwtSecretKey='secretCode',
                    {
                    expiresIn: "2h",
                    })
               
                    user[0].auth_token= auth_token,
                    console.log('token=============>',auth_token)
                
                // return user[auth_token]
                return resolve(user)
            
                
                } else{
                    console.log('==========>invalid password')
                    return resolve ({status:400, message:'invalid password'})
                   
                }
                })  
           
            } 
            catch (error) {
                return reject(error)
                
            }
        })
    }

    usersdetail(body,headers) {
        return new Promise(async (resolve, reject) => {
            try {
                
                let {
                    token
                } = headers;
                
                let auth = await uservalidation.verifyToken(token);
                if(!auth){
                    throw{code:400,message:'invalid token'}
                }
                let {
                    user_id
                } = auth
                console.log("auth==========>",auth)
                let user = await db.custom(`SELECT * from users WHERE phone ='${user_id}'`);
                console.log("user=========>",user)
                return resolve(user);
                
            } catch (error) {
                return reject(error);
            
            }
        
        })
    }
    

}

module.exports = new Service();

