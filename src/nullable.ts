// const Nullable data type

const  getUser = (input : string | null) => {
    if(input){
        console.log(`from Database ${input}`)
    }else{
        console.log("From Database: All User")
    }
}   

getUser(null)

// todo This is nullable data type in Typescript