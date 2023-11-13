let returned = require('./library')
// console.log(returned)
// console.log(returned.print())
// returned.arr.pop()
// console.log(returned.print())


function some(){
    let a=1;
    return function(){
        a++;
        return(a%2==0)?true:false;
    }
}
let b = some()
console.log(b())
console.log(b())
console.log(b())
console.log(b())