function nextGreaterElements(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(-1);
  const stack: number[] = []; // holds indexes

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop()!;
      result[index] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

console.log(nextGreaterElements([4,5,2,10]))