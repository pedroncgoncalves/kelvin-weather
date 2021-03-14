//Temperature in Kelvin
const kelvin = 293;

let celsius = Math.floor(kelvin - 273.15);

let fahrenheit = Math.floor((celsius * 1.8) + 32);

console.log(`The temperature is ${kelvin} kelvin degrees!`);
console.log(`The temperature is ${celsius} celsius degrees!`);
console.log(`The temperature is ${fahrenheit} fahrenheit degrees!`);