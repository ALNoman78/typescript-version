// todo Union |

type UserRole = "admin" | "user" 

const getDashboard = (role: UserRole) => {
    if(role === "admin"){
        return "Admin Dashboard"
    }else if (role === "user") {
            return "user Dashboard"
    }else{
        return "guest dashboard"
    }
}

// console.log(getDashboard("user"))

//todo intersection & type in TypeScript

type Employee = {
    id: number;
    name: string;
    phoneNumber: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManger = Employee & Manager

const Mondol: EmployeeManger = {
    id: 123,
    name: 'Noman',
    phoneNumber: "01318-969328",
    designation: "manager",
    teamSize: 30,
}

console.log(Mondol)