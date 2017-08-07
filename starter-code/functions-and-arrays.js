// Find the maximum
function maxOfTwoNumbers (first, second) {
  if (first > second) {
    return first;
  } else if ( second > first) {
    return second;
  } else {
    console.log("The numbers are equal.");
  }
}

let largest = maxOfTwoNumbers(2, 6);
console.log(largest);

// Finding Longest Word
function findLongestWord (words) {
  let max = 1;
  let maxWord;
  words.forEach(word => {
    if (word.length  > max) {
      max = word.length;
      maxWord = word;
    }
  });
  return maxWord;
}

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
let longest = findLongestWord(words);
console.log(longest);

// Calculating a Sum
function sumArray (array) {
  let count = 0;
  array.forEach( number => {
    count += number;
  });
  return count;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let total = sumArray(numbers);
console.log(total);

// Calculate the Average
function averageNumbers (array) {
  let count = array.length - 1;
  let sum = 0;
  array.forEach(number => {
    sum += number;
  });
  return sum/count;
}

const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
let average = averageNumbers(numbers);
console.log(average);

// Array of Strings
function averageWordLength (array) {
  let sum = 0;
  let wordsLength = array.length - 1 ;
  array.forEach( word => {
    sum += word.length;
  });
  return sum/wordsLength;
}

const words = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
let averageLength = averageWordLength(words);
console.log(averageLength);

// Function to calculate occurrences in array
let countInArray = function (array, what) {
    let count = 0;
    array.forEach(value,index => {
      if (array[index] === what) {
            count++;
        }
    });
    return count;
};

// Unique Arrays
function uniquifyArray (array) {
  array.forEach(word => {
    let howMany= countInArray(array,word);
    if ( howMany > 1) {
      let position = array.indexOf(word);
      array.splice(position, 1);
    }
  })
  return array;
}

const words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];
let unique = uniquifyArray(words);
console.log(unique);

// Finding Elements
function doesWordExist (wordsArray, word) {
  let exists = false;
  wordsArray.forEach(value, index => {
   if (wordsArray[index] === word) {
     exists = true;
   }
  })
  return exists;
}

const words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

let hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);

let hasDog = doesWordExist(words, "dog");
console.log(hasDog);

// Counting Repetition
function howManyTimes (words, word) {
   let howMany = countInArray(words, word);
   return howMany;
}

const words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

let howManyMatter = howManyTimes(words, "matter");
console.log(howManyMatter);

let howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);
