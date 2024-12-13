// console.log("hello object part2")
// const tinderUser=new Object() // singleton object
const tinderUser={} // non singleton object
tinderUser.id="123abc",
tinderUser.name="sammy",
tinderUser.isloggedIn=false

// console.log(tinderUser.id)

const regularUser={
    email:"akshat@.com",
    fullname:{
        userfullname:{
            firstname:"akshat",
            lastname:"jain"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj={...obj1,...obj2}
const obj=Object.assign(obj1,obj2)
console.log(obj)
