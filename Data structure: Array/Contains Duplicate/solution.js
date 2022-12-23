const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);