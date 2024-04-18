// Write a program to calculate the length of a given string.
console.log("Question number 1");

var program = "Write a program to calculate the length of a given string";
console.log(program.length);

// Convert a string to uppercase.
console.log("Question number 2");

var str = "ahmed";
var upperStr = str.toUpperCase();
console.log(upperStr);

//Convert a string to lowercase.
console.log("Question number 3");

var str = "GonDaL";
var lowerStr = str.toLowerCase();
console.log(lowerStr);

//Count the occurrences of a specific character within a string
console.log("Question number 4");

//Write a program that extracts a substring from a given string using a start and end index provided by the user.
console.log("Question number 5");

var string = prompt("Enter a string");

var startIndex = +prompt("Enter the index number where the string start");
var endIndex = +prompt("Enter the index number where the string end");

console.log(string.slice(startIndex, endIndex));

//Write a program to capitalize the first letter of each word in a given string.
console.log("Question number 6");

var str = prompt("Enter the string to each word to capitalize");

Remove leading and trailing whitespaces from a string
console.log("Question number 7");

var str = prompt("Enter the string");
trimedstr = str.trim();
console.log(trimedstr);

//Count the number of vowels and consonants in a given string.
console.log("Question number 8");

var inputString= prompt("Enter the string to count number of vowels and consonants");
inputString = inputString.toLowerCase();

var vowels = 0;
var consonants = 0;

var vowelArray = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] >= 'a' && inputString[i] <= 'z') {
        if (vowelArray.includes(inputString[i])) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:" , vowels);
console.log("Consonants:" , consonants);

//Extract a substring from a given string starting from a specified index up to the end of the string
console.log("Question number 9");

var givenString = prompt("Enter your String:");
var startIndex = prompt("Index Number:");
var substring = givenString.slice(startIndex);

console.log("Substring:", substring);


// Remove duplicate characters from a string.
console.log("Question number 10");
// let stringWithDuplicates = "Hello, World!";
// let uniqueStr = '';

// console.log("String with duplicates:", stringWithDuplicates);

// for (let char of stringWithDuplicates) {
//     if (uniqueStr.indexOf(char) === -1) {
//         uniqueStr += char;
//     }
// }

// console.log("String without duplicates:", uniqueStr);



