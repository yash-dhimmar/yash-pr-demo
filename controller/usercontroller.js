
const userService = require('./../services/userService');
const response = require('./../util/response');
const status = require('./../util/status')


class userControl {
     

    async registration(req,res){
        try{
            let detail = await userService.registration(req.body)
            // res.send(data)
            response.success(res, 'registration successfully', detail);
           console.log("registration==========> ",detail)
        } catch (error) {
            console.log("registation error ============>",error)
        }
    }


   
    
    
    async login(req,res) {
        try{
            let detail = await userService.login(req.body)
            // res.send(data)
            response.success(res, 'login successfully ', detail);
            console.log("detail==========> ",detail)
            
        } catch (error) {
            response.error(res,code,message)
            console.log("login error ===========>>",error)
            if(error) {
                
            }
           
           
        }
    }

    async usersdetail(req,res){
        try{
            console.log(req.headers)
            let detail = await userService.usersdetail(req.body,req.headers)
            
            res.send(detail)
            response.success(res, 'SUCCESS', detail);
            console.log("usersdetail=============> ",detail)
        } catch (error) {
            console.log("usersdetailerror================>",error)

        }
    }

}
module.exports = new userControl()