// const { name } = require("ejs");

const { MongoExpiredSessionError } = require("mongodb");

// let {name} = { 
//     name:"name"
// }

// // let { name } = obj;

// console.log(name)
// const obj = {
//     name:'athul',
// }
// const {name} = obj;
// console.log(name);


// let obj ={
//     fn:function a(value){
//         console.log('hello',this.name,value);
        
//     }
// }

// let obj1 ={
//     name:'salim',
// }

// obj.fn.call(obj1,['hello nigga']);

// let obj2 = {
//     name:a.call('value')
// }

// (function a(b){return b;})()

// const Promise = new Promise(

//     {
        
    
//         if(server = true){
//             resolve("promise is resolved");
//         }
//         else{
//             reject('promise is rejectd');
//         }
//     }
// )




// Promise.then(res=>{console})


// const arr = [1,2,3,4,5]

// const small = arr.reduce((acc,curr)=>{
//     if(curr % 2 == 0){
//         acc.push(curr)
//         return acc
//     }
// },[])

// console.log(small)



// const eventEmitter = require('events')

// const events = new eventEmitter()


// events.on('event',(value)=>{
//     console.log(value)
// })

// events.emit('event','hi')


// const express = require('express')
// const app = express()

// app.get('/',(req, res)=>{
//     res.send('this is a response')
// })


// app.listen(3000,()=>{
//     console.log('server is running on port 3000')
// })


// const fs = require('fs')

// const read = fs.readFileSync('./file.txt','utf-8')

// console.log(read)

// const productPrices = {
//     laptop: 999,
//     mouse: 25,
//     keyboard: 75,
//     monitor: 300
// };


// function total(prices){
//     let sum = 0;
//     let count = 0;
//     for(let values in prices){
//         sum+= prices[values]
//         count++
//     }
//     return sum/count;
// }

// console.log(total(productPrices))







// const result = totaldp(company)
// console.log(result)

// function highavg(result) {
//     if (result.HRavg >= result.ITavg && result.HRavg >= result.Mavg) {
//         return result.HRavg;
//     } else if (result.ITavg >= result.HRavg && result.ITavg >= result.Mavg) {
//         return result.ITavg;
//     } else {
//         return result.Mavg;
//     }
// }

// console.log(highavg(result))



// const company = {
//     HR: {
//       employees: 5,
//       managers: 2
//     },
//     Engineering: {
//       employees: 20,
//       managers: 5
//     },
//     Sales: {
//       employees: 10,
//       managers: 3
//     }
//   };

//   function totalemp(company){
//     let sum= 0;
//     for(let emps in company){
//         sum+=company[emps].employees
//     }
//     return sum;
//   }


//  console.log(totalemp(company)) 

// const obj1 = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   const obj2 = {
//     age: 25,
//     city: "Los Angeles",
//     country: "USA"
//   };

  
//   function mergeObj(o1,o2){
//     for(let keys in o2){
//         o1[keys] = o2[keys]
//     }
//     return o1
//   }

//   console.log(mergeObj(obj1,obj2))

// const original = {
//     user: {
//       name: "Alice",
//       address: {
//         city: "Wonderland",
//         zip: "12345"
//       }
//     },
//     hobbies: ["reading", "painting"],
//     metadata: {
//       created: "2023-01-01",
//       updated: "2024-08-30"
//     }
//   };

  
//   function deepCopy(og){
//     let obj2 = {}
//     for(let b in og){
//         obj2[b]=og[b]
//     }
//     return obj2
//   }

// console.log(deepCopy(original))  
// const company = {
//     HR: { John: 50000, Jane: 55000, Emily: 52000 },
//     IT: { Dave: 75000, Sam: 80000, Kate: 72000 },
//     Marketing: { Anna: 45000, Tom: 47000, Bob: 44000 }
// };

// console.log(Object.values(company));



// function totaldp(company){
//     let HRsum = 0;
//     let ITsum = 0;
//     let Marketingsum = 0;
//     let HRcount = 0;
//     let ITcount = 0;
//     let Markcount = 0;
//     for(let dp in company.HR){
//         HRsum += company.HR[dp]
//         HRcount++
//     }
//     for(let dp in company.IT){
//         ITsum += company.IT[dp]
//         ITcount++   
//     }
//     for(let dp in company.Marketing){
//         Marketingsum += company.Marketing[dp]
//         Markcount++
//     }
//     let HRavg = HRsum / HRcount 
//     let ITavg = ITsum / ITcount 
//     let Mavg = Marketingsum / Markcount 

//     return {
//         HRsum,
//         ITsum,
//         Marketingsum,
//         HRavg,
//         ITavg,
//         Mavg
//     };
// }

// let user = {
//     name:"john",
//     age:30
// };


// function clone(user){
//     let obj2 = {}
//     for(let key in user){
//         obj2[key] = user[key]
//     }
//     return obj2;
// }
// // console.log(clone(user))

// let source = {
//     a:1,
//     b:2,
//     c:3
// }
// console.log(user)

// const result = Object.assign(user, source)
// console.log(result)

// console.log(user)



// let user ={
//     name:"john",
//     sayhi(){
//         console.log(this.name)
//     }
// }


// function point(){
//     console.log(this.name)
// }
// user.sayhi()
// user.fn = point

// user.fn();


// function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }


// let user = new User("nigga")
// console.log(user)


// function Car(brand,price,year){
//     this.brand = brand;
//     this.price = price;
//     this.year = year;
// }

// // car1.name="test"
// let car1 = new Car("Honda",27000,2015);
// car1.name = "Honda civic";
// console.log(car1)

// let car2 = new Car("Maruti",34000,2011);
// // console.log(car2)

// delete car1.name;
// console.log(car1)

// function greet(){
//     console.log(`hi this is a cb fn , ${this.name}`)
// }

// function User(name,greet){
//     this.name = name;
//     this.sayHi = function(){
//         console.log(`my name is ${this.name}`)
//     };
//     this.greet = greet
// }


// let person1 = new User("Vimal",greet)

// console.log(person1)

// person1.sayHi()
// person1.greet()


// function info(){
//     console.log(`hi my name is ${this.name}, and age is ${this.age}`)
// }


// function User(name,age,cb){
//     if(!new.target){
//         // return console.log("can create new instance as new keyword not used")
//         return new User(name,age,cb)
//     }
//     this.name = name;
//     this.age = age;
//     this.intro = cb;
// }



// let alice = User("Athul",21,info)
// alice.intro()

// console.log(alice)

// let user ={
//     name:"nigga",
//     address:{
//         street:"nstreet",
//         country:"africa"
//     },
//     colour:"notdefined"
// }

// // console.log(user.address && user.address.street && user.address.street.name)
// console.log(user?.address?.street?.name)
// console.log(user?.colour?.seg)

// let obj ={a:8, b:5, c:12, d:6, e:10}


// function sort(obj){
//    let keys = Object.values(obj)
//    let i,j;
//    for(i = 0; i<keys.length-1;i++){
//     for(j=i+1; j<keys.length;j++){
//         if(keys[i] > keys[j]){
//             [keys[i] , keys[j]] = [keys[j] , keys[i]]
//         }
//     }
//    }
//    let sorted = {}
//    for(let i = 0; i<keys.length; i++){
//     let key = keys[i]
//     sorted[key] = obj[key]
//    }
//    console.log(sorted)
//    return sorted
// }
// let result = sort(obj)
// console.log(result)


// let map = new Map();

// map.set('1','string val')
// map.set(1,'num1')
// map.set(true,'bool1')

// console.log(map.get(1))
// console.log(map.get('1'))
// console.log(map.get(true))
// console.log(map.size)


// let recipe = new Map()

// recipe.set('cucumber',500)
// .set('tomatoes',350)
// .set('onion',50)

// for(let veg of recipe.entries()){
//     console.log(veg)
// }

// recipe.forEach((val,keys,map)=>{
//     console.log(`${keys} , ${val} , ${map}`)
//     // console.log(map)
// })

// let user = {
//     name:"athul",
//     age:21
// }

// let person = new Map(Object.entries(user))
// console.log(person.get('name'))


// let person = Object.fromEntries([
//     ['banana',1],
//     ['orange', 3],
//     ['meat',4]
// ])

// let map = new Map()

// map.set(1,"num")
// .set("1","string")
// .set(true,"bool")

// console.log(map.get(1))
// console.log(map.delete(1))
// console.log(map.has(1))
// console.log(map.get(1))


// let keys =  map.keys()
// let values = map.values()
// let entries = map.entries()

// for(let i of entries){
//     console.log(i)
// }
// console.log(person)

// let myset = new Set()

// myset.add(1)
// .add(2)
// .add(1)
// .add('hello')

function Create(name,age){
    this.name=name;
    this.age=age;
} 
let person = new Create("Athul",31)
let person1 = new Create("dony",65)

function greet(greeting,var1,var2){
    console.log(`${greeting}, ${this.name}, ${var1}, ${var2}`)
}
// greet.call(person,"hello")
// greet.call(person1,"hello")


let user = {
    name:"athul",
    greeting:function(var1,var2,var3){
        console.log(`${var1} ,${var2}, ${var3}, hi my name is ${this.name}`)
    }
}

let user1 = {
    name:"dony"
}

// user.greet.call(user)
// user.greet.call(user1)

// greet.apply(person,["hello","word1",'word2'])
// greet.apply(person1,["f u nigga",'words3','words4'])

// user.greeting.apply(person,["helloo","fu","you bitch"])



const double = greet.bind(person,['args1,argss2,args2'])
const double1 = user.greeting.bind(person1,['a','b','c'])
// double1()
// double()

function mul(a,b){
    console.log(a * b)
}


// const a = mul.bind()
// console.log(a(2,10))

function* genfn(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}


const gen = genfn()

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

function* count(limit){
    for(let i = 1;i<=limit;i++){
        yield i;
    }
}


const counter = count(5)

// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)


// function* even(limit){
//     for(let i = 1;i<=limit;i++){
//         if(i%2==0){
//             yield i;
//         }
//     }
// }

// const evenCount = even(10)

// for(let n of evenCount){
//     console.log(n)
// }

function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

// console.log(add(10)(5)(52))

// const addtot = add(10)

// const add1 = addtot(5)

// const add2 = add1(15)

// console.log(add2)


// (function(){
//     console.log("this is a sample iife")
// })();



function debounce(func, delay){
    let timeout;
return function(){
    clearTimeout(timeout);
    timeout = setTimeout(func, delay)
}
}

function log(){
    console.log("debounced function")
}

const dfn = debounce(log,3000)

// dfn();
// dfn();
// dfn();


function square(n){
    return n * n;
}


function memoize(fn){
    const cache = {}
    return function(x){
        if(cache[x]){
            return cache[x]
        }
        return cache[x]=fn(x);
    }
}

let memo = memoize(square);

// console.log(memo(3))
// console.log(memo(3))

const target = {};

const proxy = new Proxy(target,{
    get:(obj,prop)=>{
        if(!(prop in obj)){
            obj[prop] = "Default value"
        }
    }
})



// const mypromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const server = false;
//         if(server){
//             resolve("operation successfull")
//         }
//         else{
//             reject('operation failed')
//         }
//     }, 1000);
// })

// mypromise.then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
// })

// function mypromise(){
//     return new Promise((resolve,reject)=>{
//         const server = true;
//         if(server){
//             resolve("resolve promise")
//         }
//         else{
//             reject("rejected promose")
//         }
//     })
// }


// async function main(){
//     try {
//         const result = await mypromise()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// main()





















