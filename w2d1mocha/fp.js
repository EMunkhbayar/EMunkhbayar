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
    return a.split("").reverse().join("");
}
/* filterLongWords takes an array of string and an integer i and returns the array of words that are longer than i */
function filterLongWords(a, i){
    return a.filter(e1 => e1.length > i);  
}