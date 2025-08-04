// Title: Convert the Temperature
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/convert-the-temperature/

function convertTemperature(celsius: number): number[] {
  let ans:number[] = []
  ans.push(celsius + 273.15) 
  ans.push(celsius * 1.80 + 32.00)
return ans
};
