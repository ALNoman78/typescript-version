// todo  Object destructure
// todo Array destructure

const user = {
    userUid: 123,
    name: {
        firstName: "Abdulla",
        middleName: "Al",
        lastName: "Noman",
    },
    gender: "male",
    favoriteColor: "black",
}

// const myFavoriteColor = user.favoriteColor

const { favoriteColor: myFavoriteColor, name: { middleName: myMiddleName } } = user // it's called ame elis

// console.log(myMiddleName)

// todo Array Destructuring in Typescript

const friends = ["Person1", "Person2", "Person3"]

// ? Before Destructure

// const myFriend = friends[0] # normal way to define destructure

// ? After Destructure

const [A, myBestFriend, C] = friends //! const [, myBestFriend] if i don't need the first index or anything just use a empty coma I also can skip the last number of Data

console.log(myBestFriend)