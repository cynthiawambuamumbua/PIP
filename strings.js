//Write a function that takes a string as input and returns the longest word in the string.
function longestWord(str){
    let words=str.split(" ");
    let longestWord="";
    for(let word of words){
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }
    return longestWord;
}
console.log(longestWord("i love reading novels"));


//Write a function that takes a string as input and returns a new string with the words in reverse order.
function reversedString(string){
    return string.split("").reverse().join("")
}
console.log(reversedString("eating"))

//Write a function that takes a string as input and returns the number of times each character appears in the string.
function characterOccurence(string){
    let count ={};
    for(let character in string) {
           count[character] = (count[character] || 0)
            +1
    }
    return count;
}
console.log(characterOccurence("hello world"))

//Write a function that takes a string as input and returns the shortest word in the string.
function shortestWord(str){
    let words=str.split('');
    // let shortestWord=""
    let shortestWord=words[0];
    for(let word of words){
    if(word.length<shortestWord.length){
        shortestWord=word
    }
}
return shortestWord
}
console.log(shortestWord("i wake up very early in the morning everyday"));

//Write a function that takes a string as input and returns a new string with the words in reverse order.
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("hello world"))

//Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.
let numbers = [1,34,67,90,24,84];
const evenNumbers= (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0){ 
    sum = sum + numbers[i];
    }
  }
  return sum;
}
console.log(evenNumbers(numbers));





