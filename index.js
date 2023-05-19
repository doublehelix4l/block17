
const { coffeeMenu } = require('./coffee_data.js')
//console.log(coffeeMenu)

//2. Print an array of all the drinks on the menu.
const arr = [];
coffeeMenu.forEach(function (obj) {
    arr.push(obj.name);
})
console.log(arr);

//same as above but using .map as an example
//  let mapArray = coffeeMenu.map(function (mapElement) { return mapElement.name; });
// console.log(mapArray)

//3. Print an array of drinks that cost 5 and under.
const arr2 = [];
coffeeMenu.forEach(function (obj) {
    if (obj.price <= 5) {
        arr2.push(obj.name);
    }
})
console.log(arr2);

//4. Print an array of drinks that are priced at an even number.
const arr3 = [];
coffeeMenu.forEach(function (obj) {
    if (obj.price % 2 == 0) {
        arr3.push(obj.name);
    }
})
console.log(arr3);

//5. Print the total if you were to order one of every drink.
let sum = 0;
coffeeMenu.forEach(function (obj) {
    sum = (obj.price + sum)
    return sum
})
console.log(sum);

//6. Print an array with all the drinks that are seasonal.
const arr4 = [];
coffeeMenu.forEach(function (obj) {
    if (obj.seasonal === true) {
        arr4.push(obj.name);
    }
})
console.log(arr4);

//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
coffeeMenu.forEach(function (obj) {
    if (obj.seasonal === true) {
        console.log(obj.name + " with imported beans");
    }
})

