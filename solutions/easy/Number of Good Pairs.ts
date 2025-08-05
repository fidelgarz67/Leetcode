// Title: Number of Good Pairs
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums: number[]): number {
    let ans:number = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if((nums[i] == nums[j]) && (i < j)){
                ans++
            }
        }
    }
    return ans
};
