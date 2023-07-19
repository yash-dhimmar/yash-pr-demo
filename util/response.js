class Response{
    async success(res, message,detail, statusCode = 200) {
        let response = {
          status: 200,
        //   status: 'SUCCESS',
          message: message,
          detail: detail ? detail : {detail}
        }
        res.status(statusCode).json(response);
    }

    async error(res, code,message) {
        let response = {
          status: code,
        //   status: 'SUCCESS',
          message: message
        }
        res.status(statusCode).json(response);
    }
}

module.exports = new Response();


// message: this.getMessage(msg, language),