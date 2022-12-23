const findMedianSortedArrays = (nums1, nums2) => {
  const nums3 = nums1.concat(nums2).sort((a, b) => a - b);
  if (nums3.length % 2 !== 0) return nums3[Math.trunc(nums3.length / 2)];
  if (nums3.length % 2 === 0) {
    const i = nums3[Math.trunc(nums3.length / 2) - 1] + nums3[Math.trunc(nums3.length / 2)];
    return i / 2;
  }
  return 0;
};

findMedianSortedArrays([1, 2], [3, 4]);