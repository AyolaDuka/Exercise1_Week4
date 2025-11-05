function multiply(a, b, c) {
    if (a === b || b === c || a === c) {
        return "Error: Arguments are not unique";
    }
    return a * b * c;
}
const convertToSeconds = function(minutes) {
    return minutes * 60;
};

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for(let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count ++;
        }
    }
    return count;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(multiply (5, 9, 25))
console.log(convertToSeconds(3))
console.log(fahrenheitToCelsius(50))
console.log(reverseString("Ayola"))
console.log(countVowels("Technology"))
console.log(isPrime(26))
console.log(isPrime(9))
console.log(isPrime(57))
console.log(isPrime(78))