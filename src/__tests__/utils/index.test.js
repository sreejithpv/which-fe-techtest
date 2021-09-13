import '@testing-library/jest-dom'

import { getNumberList, getInitialNumbersArray } from '../../utils';

const numberList = getInitialNumbersArray(4);

describe('Utils getNumberList', () => {
  test("returns initial array with provided maxNumberLimit", () => {
    const numList = getNumberList({maxNumberLimit: 4});
    expect(numList).toEqual(numberList)
  });
  test("returns with selected value updated in array", () => {
    const numList = getNumberList({ maxNumberLimit: 4, selectedNumber: 2 });
    expect(numList[1].isSelected).toBe(true);
  });
  test("returns with isMultipliable", () => {
    const numList = getNumberList({ maxNumberLimit: 4, selectedNumber: 4 });
    expect(numList[0].isMultipliable).toBe(true);
  });
  test("should not get data from getInitialNumbersArray when there is numberList", () => {
    const numList = getNumberList({ maxNumberLimit: 4, numberList });
    expect(numList).toEqual(numberList)
  });
});
