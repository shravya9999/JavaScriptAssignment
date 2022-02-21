
/////////////////-----------------------------------Map-------------------------------------////////////////////////////////////
let fruits = [
    { color: "Red", name: "Apple" },
    { color: "Green", name: "Guava" },
    { color: "Red", name: "Cherry" }
];

let value = [];
console.log("\nImplementing Map logic without using map\n");
for (let i = 0; i < fruits.length; i++) {
    value.push(fruits[i].color + " " + fruits[i].name);
}
console.log(value);


console.log("\nImplementing map logic using map\n");
let values = fruits.map(function (fruit) {
    return (fruit.color + " " + fruit.name);
})
console.log(values + "\n\n");


/////////////////-----------------------------------filter-------------------------------------////////////////////////////////////

let ages = [40, 22, 56, 34, 10, 8, 5, 12, 32, 19, 16, 60, 23];


console.log("Implementing filter logic without using filter\n");
let major = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 18)
        major.push(ages[i]);
}
console.log("Ages above 18 are " + major + "\n");


console.log("\nImplementing filter logic using filter\n");
let majors = ages.filter(function (value) {
    if (value > 18) return value;
});
console.log("Ages above 18 are " + majors + "\n");


/////////////////-----------------------------------reduce-------------------------------------////////////////////////////////////
let arr = [3, 6, 12, 8, 9, 45, 20, 15, 100, 60];


console.log("\nImplementing reduce logic without using reduce\n");
let total = 0;
for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
}
console.log("Sum of all elements in an array are " + total + "\n\n");


console.log("Implementing reduce logic using reduce\n");
let sum = arr.reduce(function (sum, value) {
    return sum + value;
})
console.log("Sum of all elements in an array are " + sum + "\n\n");

/////////////////-----------------------------------forEach--------------------------------------////////////////////////////////////

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log("Implementing forEach logic without using forEach\n");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


console.log("Implementing forEach logic using forEach\n");
array.forEach(function (value) {
    console.log(value);
})