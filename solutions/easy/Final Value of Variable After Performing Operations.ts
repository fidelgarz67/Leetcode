// Title: Final Value of Variable After Performing Operations
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

function finalValueAfterOperations(operations: string[]): number {
    let ans:number = 0

    for(let i = 0; i < operations.length; i++){
        if(operations[i].includes("+")){ ans++ }
        else { ans-- }
    }

    return ans
};