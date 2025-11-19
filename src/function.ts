// todo Function
// arrow function, normal function

function addNormal(num1 : number, num2 : number ) : number {
    return num1 + num2
}

// console.log(addNormal(2, 2));


const addArrow = (number1 : number, number2 : number) : number => {
    return number1 + number2
}

// console.log(addArrow(2,3))


// todo Object => function => method [when a function is used in object it called Method ]

const poorUser = {
    name: "Noman",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

// console.log(poorUser.addBalance(1000))

//todo use function in loop it's called "Call Back function"

const arr: number[] = [1, 3, 5]

const squareArr = arr.map((elem: number): number => elem * elem)

console.log(squareArr);