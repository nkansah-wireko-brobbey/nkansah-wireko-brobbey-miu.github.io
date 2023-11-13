// let swimming = ["ring","goggles"]
// let swimmingObj={};

// [swimmingObj.ring,swimmingObj.goggles] = swimming;
// // let swimmingObj={};
// // [swimmingObj.ring,swimmingObj.goggles] = swimming

// console.log("expect ring ",swimmingObj.ring); console.log("expect goggles ",swimmingObj.goggles)
// let javelin = {distance:133};

// let {distance:myDistance} = javelin

// console.log("expect 133 ",myDistance)


// let football = ["shoes"]; let myShoes;
// [myShoes] = football
// console.log("expect shoes ",myShoes)

// let twoElements = [1,2];
// let [onekey,] = twoElements
// console.log("expect 1 ",onekey)

// let numberArray = [,,1,2];
// let[one=true,two="second",third,,]=numberArray

// console.log("expect true ",one); 
// console.log("expect second",two); console.log("expect 1",third);

// let obj = {a:1, b: "hi",c:true, d:{inner:"object"}}
// let {d:innerValue,b:message} = obj

// console.log("expect {inner:'object'} ",innerValue) 
// console.log("expect hi",message);

// let nestedObj = {nested:{inner:{i:"object"}, another: "Hello!"}}

// let {nested:{inner:{i},another:a}} =nestedObj

// console.log("expect 'object' ",i) 
// console.log("expect Hello!",a);
// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   })();
  
//   console.log(counter.value()); // 0.
  
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2.
  
//   counter.decrement();
//   console.log(counter.value()); // 1.


// function outer() {
//     let getY;
//     {
//       const y = 6;
//       getY = () => y
//     }
//     console.log(typeof y); // undefined
//     console.log(getY()); // 6
//   }
  
//   outer();
  

//   function someFn(){
//     return {
//         name(){
            
//             return 'Billy'
//         },
//         age:()=>{
//             console.error('luca')
//         },
//         dept:()=>{
//           coursename:'WAP'
//         }
//     }
//   }

// let obj = someFn()
// obj.name()
// obj.age()

// console.log("Spero return value: ",obj.spero())


// const somefnName = ()=>{

// }

// BiFunction<Integer,Integer,Boolean> name = ()->{
  
// }