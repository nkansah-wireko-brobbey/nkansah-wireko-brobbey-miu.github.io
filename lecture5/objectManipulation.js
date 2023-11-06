function objectCreation(){
    let create = {}
    create.a = "yoo"
    // console.log(create)
    // delete create.a;
    create.a = "lemoan"
    // console.log(create)
}
objectCreation()



//// convert object to array

function convertObjectToArray(obj){
    let tempArr = []

    for(let key in obj){
        if(Array.isArray(obj[key])){
            let string = ""
            for(let arrVal of obj[key] )
                string+=arrVal
            tempArr.push(key+""+string)
        }else if(typeof obj[key] == "object"){
            for(let akey in obj[key]){
                tempArr.push(key+""+akey+""+obj[key][akey])
            }
        }else{
            tempArr.push(key+""+obj[key])
        }

    }

    return tempArr;
}

// console.log(convertObjectToArray({a:1,b:[1,2],c:"string",d:{x:1,y:2}}))


// Minify Object

function minifyObject(arr, ch){
let tempArr = new Array();
    for(let ele of arr){
        if(typeof ele == "object"){
            for(let key in ele){
                if(key == ch){
                    let obj = {}
                    obj[key] = ele[key]
                    tempArr.push(obj)
                }
            }
        }
    }

    return tempArr;

}
// console.log(minifyObject([{a:1,b:2},{a:2,b:4}],'a'))

function findOldestPerson(arr){
    let max = -1;
    let name = ''

    for(let obj of arr){

        if(typeof obj == "object"){

            if(obj.age > max){
                max = obj.age
                name = obj.name
            }
        }

    }

    return name;
}

// console.log(findOldestPerson([{name:'Ram',age:20}, 
//     {name:'Lakshman',age:15}]))
function findyoungPerson(arr){
    let min = arr[0].age
    let name = ''

    for(let obj of arr){

        if(typeof obj == "object"){

            if(obj.age < min){
                min = obj.age
                name = obj.name
            }
        }

    }

    return min;
}
// console.log(findyoungPerson([{name:'Ram',age:20}, 
//     {name:'Lakshman',age:15}]))

function findPerson(arr,min,max){
    let persons = []

    for(let obj of arr){

        if(typeof obj == "object"){

            if(obj.age >= min && obj.age <= max){
                persons.push(obj)
            }
        }

    }

    return persons;
}
console.log(findPerson([{name:'Ram',age:20}, 
    {name:'Lakshman',age:15}],16,20))