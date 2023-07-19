const path = require('path');
const userController = require("../controller/usercontroller");

exports.routerConfig = (app) => {
    
// app.post('/about',userController.about)
//hello, this is commit added by Yash's teacher
//this is change that is done by Pratham Thakarani
//this changed by yash dhimmar
app.post('/register',userController.registration)

app.post('/login',userController.login)

app.post('/usersdetail',userController.usersdetail)

}