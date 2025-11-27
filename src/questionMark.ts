// single Question mark [ ? : ternary operator : decision making  ]
// double Question mark [ ?? : nullish coalescing operator ]
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