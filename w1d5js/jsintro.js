/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}
/* isVowel takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
function isVowel(a){
    if (a.length !== 1) return false;
    return ['a', 'e', 'i', 'o', 'u', 'y'].includes(a);
}
/* sum takes an array of numbers and returns sums all the numbers */
function sum(a){
    return a.reduce((e1, e2) => e1 + e2, 0);
}
/* multiply takes an array of numbers and returns multiplies all the numbers */
function multiply(a){
    return a.reduce((e1, e2) => e1 * e2, 1);
}
/* reverseMy takes an string and returns the reversal of a string */
function reverseMy(a){
    let splitted = a.split('');
    let reversed = splitted.reverse();
    let joined = reversed.join('');
    return joined;
}
/* findLongestWord takes an array of string and returns the length of the longest one */
function findLongestWord(a){
    return a.reduce((e1, e2) => (e1.length > e2.length ? e1 : e2)).length;
}
/* filterLongWords takes an array of string and an integer i and returns the array of words that are longer than i */
function filterLongWords(a, i){
    return a.filter(e1 => e1.length > i);  
}


/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
function myFunctionTestArray(expected, found) {
    if (Array.isArray(expected) && Array.isArray(found) &&
            expected.length === found.length &&
            expected.every((val, index) => val === found[index])){
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
/* test cases */
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
console.log("Expected output of isVowel('o') is true  " + myFunctionTest(true, isVowel('o')));
console.log("Expected output of isVowel('t') is false  " + myFunctionTest(false, isVowel('t')));
console.log("Expected output of isVowel('oo') is false  " + myFunctionTest(false, isVowel('oo')));
console.log("Expected output of sum([1,2,3,4,5]) is 15  " + myFunctionTest(15, sum([1,2,3,4,5])));
console.log("Expected output of sum([1,2,3,4,5]) is 15  " + myFunctionTest(10, sum([1,2,3,4,5])));
console.log("Expected output of multiply([1,2,3,4,5]) is 120  " + myFunctionTest(120, multiply([1,2,3,4,5])));
console.log("Expected output of reverseMy('jag testar') is 'ratset gaj'  " + myFunctionTest('ratset gaj', reverseMy('jag testar')));
console.log("Expected output of findLongestWord(['helloo', 'worldooo', 'hi']) is 8  " + myFunctionTest(8, findLongestWord(['helloo', 'worldooo', 'hi'])));
console.log("Expected output of filterLongWords(['helloo', 'worldooo', 'hi'], 5) is ['helloo', 'worldooo']  " + myFunctionTestArray(['helloo', 'worldooo'], filterLongWords(['helloo', 'worldooo', 'hi'], 5)));

/* jsfiddle */

document.writeln("------------Modified JSfiddle results-----------" + "<br/><br/>");
const a = [1,3,5,3,3]; 

const b = a.map(function(elem) {
  return elem * 10;
})
document.writeln(b.toString() + "<br/>");

const c = a.filter(function(elem){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");

const d = a.reduce(function(prevValue, elem){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");
document.writeln("-----------------------------------------------------" + "<br/><br/>");