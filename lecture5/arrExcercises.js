 function exercise(){



}

//// sum all numbers divisible by 4

function divisible4(arr){
    if(Array.isArray(arr)){
        let sum = 0
        arr.forEach(element => {
            if(typeof element != NaN)
                if(element % 4 == 0)
                    sum+=element
        }); 
        return sum;
    }
    return -1;
}

// console.log(divisible4(9))


///Find unique numbers in the array


function unique(arr){
    let tempArr = []
    let isFound = false;
    if(Array.isArray(arr)){
        arr.forEach(element=>{

            tempArr.forEach(ele =>{
                if(element == ele){
                    isFound = true;
                    
                }

            })

            if(isFound == false){
                tempArr.push(element)
            }
            isFound = false

        })
    }
    return tempArr;
}

// console.log(unique([1,2,2,3,4,5]))



/// print the number of types

function getTypes(arr){
    let tempArr = []
    if(Array.isArray(arr)){
        for (const iterator of arr) {
            console.log(iterator)
            tempArr.push(typeof iterator)
        }
    }
    return tempArr;
}
// console.log(getTypes([0,"apple",{a:1}]))

// Destructure Array
function destructureArray(arr){
    tempObj = {}

    for (let index = 0; index < arr.length; index++) {
        let valType = typeof arr[index]
        tempObj[valType+index] = arr[index]        
    }

    return tempObj;

}
// console.log(destructureArray([50,"apple",{a:1}]))

/// Find index of first odd number

function findOdd(arr){

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element % 2 != 0)
            return i;
    }

    return -1;
}

// console.log(findOdd([4,2,4,6,]))

/// convert a string to an array

function convertToArr(str){
    let tempArr = []
    if(typeof str == "string"){
        for(let i = 0; i<str.length;i++){
            tempArr[i] = str[i];
        }
    }
    return tempArr;
}

console.log(convertToArr("Gracious"))
