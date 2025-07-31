// Title: Score of a String
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/score-of-a-string/

function scoreOfString(s: string): number {
    var sum = 0
    for(var i=1; i<s.length; i++){
        var score = s.charCodeAt(i-1)-s.charCodeAt(i)

    if(score > 0){ sum += score}
        else {sum += (score * -1)}
    }
    return sum;
};
