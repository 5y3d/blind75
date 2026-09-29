// Problem: Given a string s, find the length of the longest substring without
// duplicate characters.
// Input: String
// Output: Number
// Examples:
  // Input: s = "abcabcbb"
  // Output: 3

  // Input: s = "bbbbb"
  // Output: 1

  // Input: s = "pwwkew"
  // Output: 3

// Data structures:
// We want something to keep track of seen characters thus far in a sequence.
// So something like a set.

// Algorithm:
// Two pointer solution, anchor and runner, combined with a sliding window set.

// Initialise left pointer to 0.
// Initialise right pointer to 0.
// Iterate right pointer until it hits the end of the string's length.
// Each pointer acts as a position on the string.

// During each iterative phase, check if the value at right is in the set; if it
// is, you have to continually iterate left, and remove the value at left from
// the set, until you remove the value.

// Add the value at right to the set

// at any given iterative phase, save the length of the set, if it is the
// largest thus far.

const lengthOfLongestSubstring = function(s) {
  let left = 0;
  let letterSet = new Set();
  let largest = 0;

  for (let right = 0; right < s.length; right++) {
    while (letterSet.has(s[right])) {
      letterSet.delete(s[left]);
      left++
    }
    
    letterSet.add(s[right]);
    if (letterSet.size > largest) { largest = letterSet.size }
  }

  return largest;
}