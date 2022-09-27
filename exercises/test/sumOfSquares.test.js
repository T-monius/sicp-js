import assert from 'assert';
import { sumOfSquares } from '../index.js';

describe('The sumSumOfSquares function', () => {
  it('Should calculate 58 from nums = [3, 2, 7]', () => {
    const num = 3;
    const num1 = 2;
    const num2 = 7;
    const result = sumOfSquares(num, num1, num2);

    assert.equal(result, 58);
  });
});
