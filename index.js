let languages =  ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]


// Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


// Remove the first item in the array
languages.splice(0, 1,);
console.log(languages);
// [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0, 0, "Scala", "Swift");
console.log(languages);
// [
//     'Scala',      'Swift',
//     'JavaScript', 'Ruby',
//     'Java',       'PHP',
//     'Python',     'Kotlin'
// ]


// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust");
console.log(languages);
// [
//   'Scala',      'Swift',
//   'JavaScript', 'Ruby',
//   'Java',       'Go',
//   'Rust',       'Python',
//   'Kotlin'
// ]


// ANSWER TO QUESTION THREE. function changeFruit( fruit ) 
    
let fruit = ['apple', 'mango', 'banana'] 

function changeFruit(fruit) {
        fruit[2] = "orange";
        return fruit;
}
console.log(changeFruit);
// [Function: changeFruit]


// ANSWER TO NUMBER FOUR
const arraysOfNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];
function maxOfArray(numbers) {
    let max = numbers[0];                     
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {                
            max = numbers[i];
        }
    }
    return max;                                
}
console.log(maxOfArray(arraysOfNumbers));
//  maximum number from this array = 83

// let randomNumbers = [1,2,3];

// function multipleOfIndex(array) {
// 	// creating a result array where we'll save the needed elements
// 	let res = [];

// 	// loop over the array
// 	for (let i = 0; i < array.length; i++) {
// 		// check if the current element (array[i]) is a multiple of it's index (i) and if it is...
// 		if (array[i] * i) {
// 			// add it to the resulting array
// 			res.map(array[i]);
// 		}
// 	}

// 	return res;
// }
// console.log(multipleOfIndex(randomNumbers));

// ANSWER TO NUMBER FIVE
let arrOfNumbers = [2,4,6,8];

let valTimesIndex = arrOfNumbers.map(function(val,index,arr){
    return val * index;
});

console.log(valTimesIndex);


	






