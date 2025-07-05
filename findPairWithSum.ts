function findPairWithSum(nums: number[], target: number): [number, number] | null {
  const map = new Map<number, number>(); 

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [complement, nums[i]];
    }

    map.set(nums[i], i);
  }

  return null;
}


const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [1, 4, 5, 3];
const target2 = 8;

const nums3 = [1, 2, 3];
const target3 = 10;

console.log(findPairWithSum(nums1, target1)); // [2, 7]
console.log(findPairWithSum(nums2, target2)); // [5, 3]
console.log(findPairWithSum(nums3, target3)); // null
