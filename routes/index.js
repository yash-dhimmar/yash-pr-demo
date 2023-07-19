const path = require('path');
const userController = require("../controller/usercontroller");

exports.routerConfig = (app) => {
    
// app.post('/about',userController.about)
//hello, this is commit added by Yash's teacher
app.post('/register',userController.registration)

app.post('/login',userController.login)

app.post('/usersdetail',userController.usersdetail)

}