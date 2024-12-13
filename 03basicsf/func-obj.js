// console.log("hello func-obj")

// function calculatorprice(val1,val2,...num1){
//     return num1
// }
// console.log(calculatorprice(20,200,100,50))

const user={
    name:"akshat",
    price:199
}
function handleobject(users){
    console.log(`user is ${users.name} and price is ${users.price}`)
}
handleobject(user)