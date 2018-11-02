const _ = require('lodash');
const Calculator = require('.zad2.js')

const item1 = new Calculator([1,2,3,4,5])
const item2 = new Calculator([1,'text',{}])

item1.sum()
item1.subtract()

item2.sum()
item2.subtract()