# Exercise 1.1

## Problem

Declare a function that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.

### Understanding

Input
- 3 args
  - Numbers
Output
- Number
  - Sum of squares of two larger numbers

## Examples / Test Cases

```js
const num = 3;
const num1 = 2;
const num2 = 7;
const nums = [num, num1, num2];

nums.sort( (a, b) => a - b);  //=> [ 2, 3, 7 ]

// Two larger are 7 and 3
// 7 ** 2 + 3 ** 2 => 49 + 9 => 58
```

## Data Structures

- Array

## Algorithm

1. Declare an array of input arguments `nums`
2. Sort nums
3. Access last two arguments
4. Square each of last two arguments
5. Add squares
6. Return sum
