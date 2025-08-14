// Title: Shuffle the Array
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/shuffle-the-array/

function shuffle(nums: number[], n: number): number[] {
    let ans:number[] = []
    for(let i = 0; n < nums.length; i++){
        ans.push(nums[i])
        ans.push(nums[n])
        n++
    }
return ans
};