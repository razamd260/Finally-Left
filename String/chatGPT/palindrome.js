/**
 *   here check whether the given string is palindrome or not
 *   A palindrome is a word, phrase, number, or other sequence of characters that 
 *   reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 */

let str1 = "madam";
let str2 = str1.split('').reverse().join('');

str1 === str2 ? console.log(`${str1} is a palindrome`) : console.log(`${str1} is not a palindrome`);