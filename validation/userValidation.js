const jwt = require('jsonwebtoken');
const status = require('./../util/status')

class userValidation {
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            try{
                const decoded = jwt.verify(token, status.jwtSecretKey);
                console.log(decoded);
                return resolve(decoded);
            }
            catch(error) {
                return reject ({code:400, message:'Invalid token'})
                console.log('error ======>',error)
                
            }
        })
    }
}

module.exports= new userValidation()