function addTwoNumbers(a,b,c){

    if(a>b && a>c)
        console.log(a)
    else if(b>a && b>c)
        console.log(b)
    else
        console.log(c)

}

addTwoNumbers(3,2,2)

function multiplesOfThree(myArr){
let sum = 0;
    myArr.forEach(element => {
        if(element % 3 == 0)
            sum+=element
    });
return sum;
}


//// is palindrome

function isPalindrome(str){
    let backwards='';

    for (let index = str.length; index >= 0; index--) {
        backwards+= str.charAt(index)        
    }
    return backwards == str;
}

console.log(isPalindrome('level'));


///// Check maximum of two numbers

function max(a,b){
    if(a>b)
        return a;
    else
        return b;
}
console.log(max(1,2))

//// Check maximum of three numbers

function maxOfThree(a,b,c){
    if(a>b && a>c)
        return a;
    else if(b>a && b>c)
        return b
    return c;
}

//// isVowel
function isVowel(a){
    if(a.length != 1)
        return false;
    let vowels = 'aeiou';
    
    return (vowels.indexOf(a)<0)? false: true;

}
console.log("Check vowel: "+ isVowel('a'))

//// reverse a string 

function reverseString(str){
    let reverseStr = ''
    for (let index = str.length; index >= 0; index--) {
        reverseStr+=str.charAt(index)
        
    }
    return reverseStr;
}
console.log("Reverse a string: "+ reverseString("Reversed"))

///// Find the longest word

function longestLength(strArr){
    let longLenth =0;
    strArr.forEach(element =>{
        if(element.length > longLenth)
            longLenth = element.length
    })
    return longLenth;
}

console.log("Longest lenth: "+ longestLength(["Longest","long","short"]))

///// Filter long words
function findLongWords(strArr, len){
    let newArr = [];

    strArr.forEach(ele =>{
        if(ele.length > len){
            newArr.push(ele)
        }
    })
    return newArr;
}
console.log(findLongWords(["aseda","Luka","Asana"],4));


///// Remove an element

function removeElement(sourceArr, element){
    let newArr = []

    sourceArr.forEach(ele =>{
        if(ele != element)
            newArr.push(ele)
    })

    return newArr;

}

console.log(removeElement(["apple", "spero","banana"],"apple"))


///// indexOf implementation

function myIndexOf(strArr, str){
    let index = -1;

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i]== str)
            return i;
    }

    return index;
}

console.log("Index of: ", myIndexOf(["Github","Mercurial"],"Githu"))


///// lastIndexOf implementation

function myIndexOf(strArr, str){
    let index = -1;

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i]== str)
            index = i;
    }

    return index;
}

console.log("Last index of: ", myIndexOf(["Github","Mercurial","Github"],"Github"))


///// includes implementation

function myIncludes(strArr, searchStr, position){
let start = 0;
    if(position)
        start = position;

    for(let i = start;i < strArr; i++){
        if(strArr[i]== searchStr)
            return true;
    }

    return false;
}

/////  

