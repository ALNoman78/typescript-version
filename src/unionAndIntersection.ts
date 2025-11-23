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

console.log(getDashboard("user"))