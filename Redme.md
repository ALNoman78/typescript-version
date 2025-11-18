📚 Arrays
✅ 1. String Array
let bazarList: string[] = ["eggs", "milk", "sugar"];


This array stores only strings.

Adding a value of another type results in an error:

bazarList.push(true); // ❌ Error: boolean is not assignable to string

✅ 2. Union Type / Mixed Array

To store multiple types in an array, use union types:

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];
mixedArr.push(12); // ✔ Valid


Another example:

let mixedArrTwo: (string | number)[] = ["Noman", 21, "Person 2", 2, "Person 3", 3];
mixedArrTwo.push(2); // ✔ Valid

🎯 Tuples

A tuple is similar to an array but with:

A fixed length

Strictly defined order of types

More predictable structure

Examples:

let coordinates: [number, number] = [10, 20];
let couple: [string, string] = ["husband", "wife"];


Mixed type tuple:

let nameAndRoll: [string, number] = ["Person 1", 21];


❗ Important Rule: You cannot change the order or type.

// nameAndRoll[0] = 32; // ❌ Error: Expected a string


Another tuple:

let destination: [string, string, number] = ["Dhaka", "Kurigram", 3];

📝 Object Types

Objects allow you to define structured data with clearly typed properties.

✅ Required Properties
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Abdulla",
  middleName: "AL",
  lastName: "Noman",
};


All fields must be provided—TypeScript enforces them strictly.

🟡 Optional Properties

Use ? to mark a field as optional:

const userTwo: {
  firstName: string;
  middleName?: string; // optional field
  lastName: string;
} = {
  firstName: "Jhankar",
  lastName: "Mahabub",
};


Here, middleName is optional, so it doesn’t need to be included.

⭐ Key Concepts & Notes
🔹 Arrays

string[] → only strings allowed

(string | number)[] → multiple types allowed

TypeScript prevents incorrect .push() operations

🔹 Tuples

Fixed structure

Each index has a specific type

Order must be followed

🔹 Objects

Clearly typed fields

Optional fields use ?

Helps make code more predictable and organized


🎉 Summary

This README covered:

How TypeScript handles arrays

Using union types for mixed arrays

Understanding tuples

Working with object structures

Applying optional properties