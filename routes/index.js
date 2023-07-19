const path = require('path');
const userController = require("../controller/usercontroller");

exports.routerConfig = (app) => {
    
// app.post('/about',userController.about)
app.post('/register',userController.registration)

app.post('/login',userController.login)

app.post('/usersdetail',userController.usersdetail)

}