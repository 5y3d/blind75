// This is the intuitive solution, but the worst case scenario is quadratic,
// It also performs very poorly on leetcode; 6th percentile in terms of
// speed; probably my use of an object and the number to string conversion.
// Better to use a set.
// On avg, this approach is O(n). You could also do a sorted approach which
// is better in the worst case, but slower on average.
const longestConsecutive = function(nums) {
    const numMap = {};
    for (let num of nums) {
        numMap[num] = true;
    }

    let conLength = 0;

    for (let num in numMap) {
      num = Number(num);
      if (!numMap[num - 1]) {
        let subSeqLen = 1;
        let next = num + 1;
        while (numMap[next]) {
            subSeqLen++;
            next++;
        }
        conLength = subSeqLen > conLength ? subSeqLen : conLength;
      }
    }

    return conLength;
};