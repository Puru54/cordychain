class AppError extends Error{//inheriting from parent class class Error
    constructor(message,statusCode){
        //calll parent constructor using super
        super(message)//message is the parameter that the built-in error accepts
        this.statusCode=statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'fail':'error'
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor)
    }
}
module.exports = AppError
