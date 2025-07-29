// Title: Return Length of Arguments Passed
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/return-length-of-arguments-passed/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length;
};
