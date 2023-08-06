const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [0,1,1]

const theeSum = (nums) => {
  let ans = [];

  if (nums.length < 3) return ans;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        ans.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) start++;
        while (start < end && nums[end] === nums[end + 1]) end--;
      } else if (sum < 0) start++;
      else if (sum > 0) end--;
    }
  }
  return ans;
};

const threeSum = (nums) => {
  let ans = [];
  if (nums.length < 3) return ans;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        ans.push([nums[i], nums[start], nums[end]]);

        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) start++;
        while (start < end && nums[end] === nums[end + 1]) end--;
      } else if (sum < 0) start++;
      else if (sum > 0) end--;
    }
  }
};

console.log(threeSum(nums));
