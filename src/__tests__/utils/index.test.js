import '@testing-library/jest-dom'

import { getInitialNumbersArray } from '../../utils';

describe('Utils getInitialNumbersArray', () => {
  test("returns initial array with provided maxNumberLimit", () => {
    const numList = getInitialNumbersArray(4);
    expect(numList).toEqual([1, 2, 3, 4])
  });
  test("returns empty array when there is no maxNumberLimit", () => {
    const numList = getInitialNumbersArray();
    expect(numList).toEqual([])
  });
});
