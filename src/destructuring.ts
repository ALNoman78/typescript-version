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

console.log(myMiddleName)