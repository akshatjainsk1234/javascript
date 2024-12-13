// singleton

// object literals
// symbol

const mysym=Symbol("key1")
const jsUser={
    name:"akshat",
    "full name":"akshat jain",
    age:22,
    [mysym]:"mykey1",
    location:"punjab",
    email:"akshat@google.com",
    isloggedIn:false,
    lastLoginDays:["monday","wednesday"],
}
jsUser.name="raju"

// function create 
jsUser.greeting=function(){
    console.log("hello js object")
}
jsUser.greetingtwo=function(){
    console.log(`hello my name is ${this.name}`)
}
// console.log(jsUser.greeting)
// console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())
// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser.location)
// console.log(jsUser["full name"])
// console.log(jsUser.mysym)
// console.log(typeof jsUser.mysym)
// console.log(jsUser[mysym])
// console.log(typeof jsUser[mysym])
// console.log(jsUser.name)

// console.log(jsUser)
// console.log(typeof jsUser)

