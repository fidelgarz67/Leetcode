// Title: Concatenation of Array
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/concatenation-of-array/

function getConcatenation(nums: number[]): number[] {
    let ans:number[] = []
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[i])
    }

    for(let j = 0; j < nums.length; j++){
        ans.push(nums[j])
    }
    return ans
};
