///
function someFunction(){
    let arr =[];
    arr.push("Spero","Brobbs")
    
    console.log(arr)

    arr.unshift("Laud")

    // console.log(arr)

    arr.pop()
    // console.log(arr)

    //// splicing an array

    let sArr = []

    sArr[0] = "Spero"
    sArr.push("Nkansah")
    console.log(sArr)

    sArr.splice(1,0)
    console.log(sArr)


    /// slicing an arrary

    let sArrCopy = sArr.slice(1);
    console.log("This is a copy: ", sArrCopy)
    
}

someFunction();