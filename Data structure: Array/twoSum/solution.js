const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
  }
  return 0;
};

twoSum([2, 7, 11, 15], 9);