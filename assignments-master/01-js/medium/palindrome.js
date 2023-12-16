/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length;
  if(n===1)
  return true;
  const strnew = str.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
  for(let i = 0 , j = n-1;  i < j; i++, j--)
  {
      if(strnew[i]!==strnew[j])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
