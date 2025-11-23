// todo for Object

type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: "male" | "female";
    contactInfo: string;
    address: {
        division: string;
        city: string;
    }
}


const user2: User = {
    id: 2,
    name: {
        firstName: "Abdulla Al",
        lastName: "Noman",
    },
    gender: "male",
    contactInfo: "01318",
    address: {
        division: "Kurigram",
        city: "Kurigram"
    }
}



const user: User = {
    id: 1,
    name: {
        firstName: "Maisa Monoara",
        lastName: "Moule",
    },
    gender: "female",
    contactInfo: "01721",
    address: {
        division: "Rangpur",
        city: "Kurigram"
    }

}

// todo for boolean

type IsAdmin = true;


const isAdmin: IsAdmin = true

// todo If you want to use normal font alias

type Name = string;

const name: Name = "Moule"

//todo Name Alias for Function

type AddFunction = (num1: number, num2: number) => number

const add: AddFunction = (num1, num2) => {
    const total = num1 + num2
    return total
}