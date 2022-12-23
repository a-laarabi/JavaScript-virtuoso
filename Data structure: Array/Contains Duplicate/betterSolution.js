const containsDuplicate = (nums) => (new Set(nums)).size !== nums.length;

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);