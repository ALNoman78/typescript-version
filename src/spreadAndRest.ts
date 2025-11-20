// spread operator


const friends = ["Person1", "Person2"]

const schoolFriend = ["Person3", "Person4", "Person5"]

const collageFriend = ["Mr. Person1", "Mr. Person2"]

friends.push(...schoolFriend)
friends.push(...collageFriend)

// console.log(friends);

const user = {
    name: "Moule",
    phoneNumber: "01318969328"
}

const otherInfo = {
    hobby: "Outing",
    favColor: "black"
}

const userInfo = { ...user, ...otherInfo }

// ? user marge
// console.log(userInfo)


//todo Rest operator 

const sendInvitation = (...friends: string[]) => {

    friends.forEach((friend: string) => console.log(`Send invitation to ${friend}`))
}

sendInvitation("Noman", "Moule", "Mohua", "Person1")
