// Title: Find Minimum Operations to Make All Elements Divisible by Three
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

function minimumOperations(nums: number[]): number {
    let count:number = 0
    for (let i = 0; i < nums.length; i++){
        if(nums[i]%3 !== 0){
            count++
        } 
    }
    return count;    
};