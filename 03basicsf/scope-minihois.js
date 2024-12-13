// console.log("hello scope-minihois-js")

function one(){
    const username="akshat"
    function two(){
        const website="freelancer"
        console.log(username)
    }
    // console.log(website)

    two()
    
}
one()