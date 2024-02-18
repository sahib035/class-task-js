//question 1

// var num = 123;
// var numString = num.toString();
// var sum = 0;

// for (var i = 0; i < numString.length; i++) {
//     sum += parseInt(numString[i]);
// }

// console.log(sum);


//question 2

// var num1 = 2;
// var num2 = 5;
// var sum = 0;

// for (var i = num1; i <= num2; i++) {
//     sum += i;
// }

// console.log("Sum of the range between", num1, "and", num2, "is:", sum);

//question 3

// var numbers = [2, 4, 6, 8, 10];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// var average = sum / numbers.length;

// console.log("Average of the numbers in the array is:", average);


//Question 4
// var str1 = "car";
// var str2 = "bat";

// var str3 = "car";
// var str4 = "care";


// if (str1.length === str2.length) {
//     console.log(str1 + " and " + str2 + " have the same number of characters.");
// } else {
//     console.log(str1 + " and " + str2 + " do not have the same number of characters.");
// }

// if (str3.length === str4.length) {
//     console.log(str3 + " and " + str4 + " have the same number of characters.");
// } else {
//     console.log(str3 + " and " + str4 + " do not have the same number of characters.");
// }

//Question5
let fName = "name";

if (fName.length >= 2) {
    // Get the first character
    var firstChar = fName[0];
    
    // Get the last character
    var lastChar = fName[fName.length - 1];
    
    // Replace the first character with the last character
    fName= lastChar + fName.substring(1, fName.length - 1) + firstChar;
    
    console.log("Original string:", fName);
}
