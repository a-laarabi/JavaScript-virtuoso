const threeSum = (nums) => {
  let res = [];
  for (let i = 0; i < nums.length; i++){
      for(let j = i + 1; j+1 < nums.length; j++){
          if (i != j && i != j+1 && j != j+1) {
              if (nums[i] + nums[j] + nums[j+1] == 0) {
                  res.push([nums[i], nums[j], nums[j+1]]);
              }
          }
      }
  }
  return res;
};

threeSum([-1,0,1,2,-1,-4]);

/*
didnt pass all the examples 
need to update
    input [0,0,0,0]

    Output [[0,0,0],[0,0,0],[0,0,0]]
    Expected [[0,0,0]]
*/