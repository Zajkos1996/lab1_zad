const _ = require('lodash');

module.exports = class Calculator{
    constructor(items){
        this.array = _.filter(items, function (o) {return _.isNumber(o);})

        for(let i = 0; i < items.length; i++){
            if( !_.isNumber(items[i])){
                console.log(i + " " + items[i] + " is a " + typeof items[i]);
            }
        }
    }
    sum(){
        console.log ("sum: " + _.reduce(this.array, function(sum, n) {return sum + n; },0));
    }
    substract(){
        console.log("substrakt: " + _.reduce(this.array, function(result, n) {return result -n;}, 0))
    }
}