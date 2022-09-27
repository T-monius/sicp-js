const sumOfSquares = (num, num1, num2) => {
  const nums = [num, num1, num2];
  const idxOfLastTwo = nums.length - 2;
  nums.sort( (a, b) => a - b);

  const largerTwoNums = nums.slice(idxOfLastTwo);
  const squares = largerTwoNums.map( (num) => num ** 2);
  const squaresSummed = squares.reduce( (sum, num) => sum + num, 0);
  return squaresSummed;
};

export { sumOfSquares };