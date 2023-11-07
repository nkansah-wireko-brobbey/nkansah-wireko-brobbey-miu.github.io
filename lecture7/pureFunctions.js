///// reducing
function reduceArray(array){
    let sum = array.reduce((acc,val)=>{
        if(val % 2 ==0)
            return val+acc
        return acc
    },0)
    return sum
}

// console.log(reduceArray([1,2,3,4]))

/// alternative solution to reducing
function reduceArrayOpt1(array){
    let sum = array.filter(val => { return val % 2 == 0}).reduce((acc,val)=>{ return acc+val},1);
    return sum;
}
console.log(reduceArrayOpt1([1,2,3,4]))





//// filtering

function filterArray(arr){

    let retArr = arr.filter((val)=>{
       
       return  val.age > 20; 
    })
    return retArr;
}

// console.log(filterArray([{name:'Ram',age:'20'},{name:'Nkansah',age:'30'}]))

//// filtering 2
function filterArrayName(arr){

    let retArr = arr.filter((val)=>{
       
       return  val.age > 20; 
    })
    return retArr;
}
