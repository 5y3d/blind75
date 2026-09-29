// Given a string s, return the longest palindromic substring in s.
// The most effecient way to approach this is to iterate over each character
// in the string, and treat it as a potential CENTRE of a substring. And it's
// important to note that there are two types of centres, single centres for odd
// strings, and dual centres of even strings. So when you determine substrings,
// you'll need to do one for each, since each letter could be the centre of an
// odd substring, or one half of the centre of an even substring.

// So iterate over the letters, treat each as the centre. For each centre,
// determine the length of the largest palindromic substring length, for odd and
// even substrings. How do you do that? Well:
  // in odd cases, initialise left and right to the centre, else left is centre
  // and right is centre + 1.
  // While in bounds of the string, and each pointer's letter is equal, move the
  // pointers outward (left - & right +).
  // Return a slice between the indexes.

// During each phase, determine the larger of the two, and then determine if
// that one is the largest one you've ever encountered.
// Finally, return the largest.

const longestPalindrome = function(s) {
    let sub = "";

    for (let i = 0; i < s.length; i++) {
        let oddString = determineSub(s, i, i);
        let evenString = determineSub(s, i, i + 1);
        let larger = oddString.length > evenString.length ? oddString : evenString;
        sub = larger.length > sub.length ? larger : sub;
    }
    return sub;

    function determineSub(string, start, end) {
        while(start > -1 && end < string.length && string[start] === string[end]) {
            start--;
            end++;
        }
        return string.slice(start + 1, end);
    }
};
