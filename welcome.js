'use strict'

module.exports = function (message) {

    if (NODE_ENV === 'development') {
        console.log(message);
    }

    //    if (process.env.NODE_ENV === 'development') {
    //        console.log(message);
    //    }
    //    
    //    console.log(process.env.USER);

    alert('Welcome ' + message);
}
