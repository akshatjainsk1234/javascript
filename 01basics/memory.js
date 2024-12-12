// two type of memory
// stack  primitive datatype copy value
// heap non primitive datatype original value

// stack code 

// let name= "akshat"
// let anothername=name;
// anothername="anshul"
// console.log(name)
// console.log(anothername)


let user1={
    email:"akshat@gmail.com",
    pass:1234
}

let user2=user1;
user2.email="akshat@google.com";
user2.pass=123456;

console.log(user2.email)
console.log(user2.pass)

console.log(user1.email)
console.log(user1.pass)

