
const constants = require('../constants');

const errorToJson = (err, req, res, next) => {
    const errStatus = err.statusCode || 500;
    const errMessage = err.message || 'Something went wrong';

    switch (errStatus) {
        case constants.NOT_FOUND:
            res.status(errStatus).json({
                title: 'Not Found',
                success: false,
                status: errStatus,
                message: errMessage,
                stack: err.stack 
            })
            break;
        case constants.VALIDATION_ERROR:
            res.status(errStatus).json({
                title: 'Validation Error',
                success: false,
                status: errStatus,
                message: errMessage,
                stack: err.stack 
            })
            break;
        case constants.UNAUTHORIZED:
            res.status(errStatus).json({
                title: 'Unauthorization Error',
                success: false,
                status: errStatus,
                message: errMessage,
                stack: err.stack 
            })
            break;
        case constants.FORBIDDEN:
            res.status(errStatus).json({
                title: 'Forbidden',
                success: false,
                status: errStatus,
                message: errMessage,
                stack: err.stack 
            })
            break;
        case constants.SERVER_ERROR:
            res.status(errStatus).json({
                title: 'Server Error',
                success: false,
                status: errStatus,
                message: errMessage,
                stack: err.stack 
            })
            break;
        
        default:
            console.log('No Error! All Good...')
            break;
    }
    
};


module.exports = {errorToJson};