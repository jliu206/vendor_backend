// this module is to init the entire service, called by app.js when start the service

function init(){
    // only 1 init process for now 
    const orm = require('./orm')
    orm.initDB();
    //to do kill the process and throw error when any part of init is fail

}

moduel.exports.init = init
