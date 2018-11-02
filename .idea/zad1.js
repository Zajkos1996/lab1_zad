const _ = require('lodash');
function sum(){
    var result = 0;

    for( let i = 0 ; i < arguments.length ; i++ ) {
        if(_.isNumber(arguments[i])){
            result += arguments[i];
        }else {
            console.log(i + ": " + arguments[i] + "is a  " + typeof arguments[i]);
        }
    }
    return result;
}