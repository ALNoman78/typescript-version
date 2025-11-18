// todo Non-Primitive Data type [ array, object ]

// ? string type Array List 

let bazarList: string[] = [" eggs", "milk", "sugar"]

// bazarList.push(true) doesn't work because when i already declare  the array should be in string 

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2] // here i also used mixed array like number and array

mixedArr.push(12)

let mixedArrTwo: (string | number)[] = ["Noman", 21, "Person 2", 2, "person 3", 3]

mixedArrTwo.push(2)

// todo typescript -> tuple 

let coordinates: [number, number] = [10, 20] //? tuple is just like couple 

let couple: [string, string] = ["husband ", "wife"]

let nameAndRoll: [string, number] = ["Person 1", 21] //! The main rule is strict here like if i assign the tuple as a string first the i have to use there string first 

// nameAndRoll[0] = 32 //! that's an Error here

// ? here is an example

let destination: [string, string, number] = ["Dhaka", "Kurigram", 3] 

// todo reference type : object 

//? for three name 

const user : {
    firstName : string;
    middleName : string;
    lastName: string;
    // age : Number,
} = {
    firstName : "Abdulla",
    middleName: "AL",
    lastName : "Noman",
    // age: 21,
}

// todo here is some exception character here as a object  [ when i already declare the type here is now also required value now I have to define the value here]

// ! issues : 01 . middleName should be optional chaining 

const userTwo : {
    firstName : string,
    middleName ?: string, // here we already declare the option chaining 
    lastName : string
} = {
    firstName : "Jhankar",
    lastName : "Mahabub"
}