// Title: Find Words Containing Character
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/find-words-containing-character/

function findWordsContaining(words: string[], x: string): number[] {
    let ans:number[] = []
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < [...words[i]].length; j++){
            if([...words[i]][j] === x){ ans.push (i)}
        }
    }

    // new sets will remove duplicate variables
    return [... new Set(ans)]
};
