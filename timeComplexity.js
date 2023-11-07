function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    } //Loop with length of `n`
  } //Time Complexity: O(n)
  
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  } //Loop with max length of `n`
} //Time Complexity: O(n)
  
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  } //Loop with max length of 10 (The worst case scenario)
} //Time Complexity: O(10) => O(1)
  
function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  } //Loop with max length of `n`
  return newArray;
} //Time Complexity: O(n)
  
function subtotals(array) {
  let subtotalArray = [];
  for (let i = 0; i < array.length; i++) {
   let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    } //Loop within Loop with max length of `n`
    subtotalArray.push(subtotal);
  } //Loop with max length of `n`
  return subtotalArray;
} //Time Complexity: O(n^2)
  
function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if(vowels.includes(char)) {
      if(char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  } //Loop with max length of `n`

  return vowelCount;
} //Time Complexity: O(n)