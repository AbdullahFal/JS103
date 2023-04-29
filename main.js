const txt = 'I love running'
let regex = /running/

let containsRegex = regex.test(txt)
console.log(containsRegex)

//false use case
//regex = /sports/
//console.log(regex.test(str))

//Replace method
let newtxt = txt.replace(regex, 'jogging')
console.log(newtxt)


//search method
let searchtxt = txt.search(/running/)
console.log(searchtxt)

//match
let num = '1 2 3 4 5 3 1 3 45 6 343 2 1 3 43 1'
let matchArray = num.match(/1/g)
console.log(matchArray)
console.log(matchArray.length)

//Promises ---------------------------------------

//example 1
/*
console.log(1)
console.log(2)
setTimeout(() => {
    console.log(3)
},3000)
console.log(4)
console.log(5)
*/


// Asynchronous example
/*
console.log('start')
function userInfo(name){
    setTimeout(() => {
        console.log('** User info received **')
        return name
    },3000)
    
}

let userName = userInfo('Salem')
console.log(userName)
console.log('end')
*/

/*
console.log('start')
function userInfo(name, callback){
    setTimeout(() => {
        console.log('** User info received**')
        callback(name) 
    },3000)
    
}

let userName = userInfo('Abdullah', name =>{
    console.log(`Your name is ${name}`)
})
console.log('end')
*/


//solving example 2 with promise
console.log('start')
const userInfo = new Promise((resolve,reject) => {
    setTimeout(() => {
        const newUser ={
            name: 'Mahmoud',
            age: 29
        }
        resolve(newUser)
    },3000)
    
})

//adding an age condtion
const addNewUser = newUser => {
    let userAge = newUser.age
    let adultAge;
    if(userAge >= 18){
        adultAge = `${newUser.name} is an Adult`
        //promise.resolve
        return Promise.resolve(adultAge)
    }else{
        adultAge  = `${newUser.name} is NOT an Adult`
         //promise.reject
        return Promise.reject(new Error(adultAge))
    }
}

userInfo
//to execute promise.resolve
.then(addNewUser)
.then(res =>{
    console.log('** User info received**')
    console.log(res)
})
//to execute promise.reject
.catch(err => {
    console.log(err.message)
})
console.log('end')



//Dstructuring -------------------------------------
let ages = [25,30,32]
let [firstAge, secondAge, thirdAge] = ages
console.log(firstAge, secondAge, thirdAge)

//undefined Dstructuring
let colors = ['red','blue']
let [fisrtColor, secondColor, thirdColor] = colors
console.log(fisrtColor, secondColor, thirdColor)

//Dstructuring Default Value

//colors = ['red','blue','black']
let [ftColor, sdColor, tdColor = 'yellow'] = colors 
console.log(ftColor, sdColor, tdColor)

//Ignoring values

colors = ['red','blue','black','green']
 let [,,fColor, sColor] = colors
 console.log(fColor, sColor)


 //Destructuring Nested Arrays
 let numbers = [1,2, [3,4]]
 let [first, second , third] = numbers
 console.log(first, second , third);
 console.log(first, second , third[0]);
 let [fNum, SNum,[fValue,sValue]] = numbers
 console.log(fNum, SNum,fValue,sValue);
 
 //swap with Destructuring
 let num1 = 1 , num2 =2;
 [num1,num2] = [num2,num1]
 console.log(num1,num2)


 //Destructuring with L(left) value

 colors = ['red','blue','black','green']

 [colors[0],colors[1]]=['purble', 'crimson']
 console.log(colors)

 //Object Destructuring

 let student = {
    name: 'Abdullah',
    age: 21,
    gender: 'male'
 }
 // let {name: myName,age: myAge} = student
 //console.log(myName,myAge)
 let name = 'Ali' , age = 18 , gender ='male';
 //to solve the problem of 'blocks'
 //{name,age,gender} = student
 ({name,age,gender} = student)
 console.log(name,age,gender)


  //Destructuring Nested objects(two-level object)

  let uniStudent ={
    name: {
        first: 'Abdullah',
        lastName: 'Abualfaraa'
    },
    //Object Destructuring using String Key
    '@s age': 21
  }

  let {name:{lastName: myLastName}} = uniStudent
  console.log(myLastName)
  console.log(uniStudent['@s age'])

  let nums = [1,2,3,4,5,6,7]
  let [n1,n2,...otherN] =  nums
  console.log(n1,n2,otherN)
  console.log(n1,n2,...otherN)
  console.log(n1,n2,otherN[0])

let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [...array1,...array2]
console.log(array3)

let foods = ['meat','Veggies']
let [f1,f2,...fs]=  foods
console.log(f1,f2,fs)


let runner = {
    runnerName: 'Hammam',
    runnerAge: 30,
    runnerGender: 'male'
}

//object Dstructuring with  Default Value
let {runnerName,runnerNickName = 'unKnown',...otherInfo} = runner
console.log(runnerName, runnerNickName, otherInfo)