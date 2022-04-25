const names = require('./4-names');
const sayHi = require('./5-utils');

for (let name in names){
    sayHi(names[name]);
}



