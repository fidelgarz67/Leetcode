// Title: Transform Array by Parity
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/transform-array-by-parity/

function transformArray(nums: number[]): number[] {
    const n = nums.length;
    for (let i = 0; i < n; i += 1) {
        nums[i] = (nums[i] % 2 === 0) ? 0 : 1;
    }
    return nums.sort((a, b) => a - b);    
};
