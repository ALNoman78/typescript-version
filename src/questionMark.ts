// single Question mark [ ? : ternary operator : decision making  ]
// double Question mark [ ?? : nullish coalescing operator ] work for null and undefine
// single but it's also called optional chaining [ ?. optional chaining ]


// todo Decision making

const userAge = 21

const marriageEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log('You are eligible for Marriage ')
    // }else{
    //     console.log("Your are not eligible for marriage")
    // }

    const result = age >= 21 ? "You are eligible" : "You are not eligible"
    console.log(result)
}

marriageEligible(21)



//todo nullish operator [??] // nullish operator only work for null and undefine

const userTheme = null;

const selectedTheme = userTheme ?? 'light theme'

console.log(selectedTheme)

const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are Guest"

// ? same thing in Different way

const resultWithNullish = isAuthenticated ?? "You are guest"


console.log({ resultWithTernary }, { resultWithNullish })