/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //ans =>
       const sortedStr1 = str1.replace("/\s/g", '').toLowerCase().split('').sort().join('');
       const sortedStr2 = str2.replace("/\s/g", '').toLowerCase().split('').sort().join('');
   
       return sortedStr1 === sortedStr2;
  //This has the time complexity of O(nlogn) due to the usage of sort function
}

//Following code has the time complexity of O(n) ~ ASR

// function isAnagram(str1, str2) {
//   const cleanString = (str) => str.replace(/\s/g, '').toLowerCase();

//   const countCharacters = (str) => {
//       const charCount = {};
//       for (let char of str) {
//           charCount[char] = (charCount[char] || 0) + 1;
//       }
//       return charCount;
//   };

//   const charCount1 = countCharacters(cleanString(str1));
//   const charCount2 = countCharacters(cleanString(str2));

//   // Compare character frequency maps
//   return JSON.stringify(charCount1) === JSON.stringify(charCount2);
// }
module.exports = isAnagram;
