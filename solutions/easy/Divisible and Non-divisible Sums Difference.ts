// Title: Divisible and Non-divisible Sums Difference
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/

function differenceOfSums(n: number, m: number): number {
    var num1 = 0
    var num2 = 0

    for(var i = 1; i <= n; i++){
        if(i % m !== 0){ num1 += i }
            else { num2 += i}
    }
    return num1 - num2
};
