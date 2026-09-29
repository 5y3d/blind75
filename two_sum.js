// Array is unsorted. This is O(n).

const twoSum = function(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let targetNum = target - num;
    if (numMap[targetNum] !== undefined) { return [i, numMap[targetNum]] }
    numMap[num] = i;
  }
};