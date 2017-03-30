import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort'
import genRanNum from '../scripts/genNumTestArray'
import genRandomAlphaArray from '../scripts/genRanAlphaArray'

describe('insertion sort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should return an array', () => {
    let array = [2, 5, 0, 1, 4, 3];

    insertionSort(array);
    assert.isArray(array)
  })

  it('should sort an unsorted two number array', () => {
    let array = [2, 5];


    insertionSort(array);
    assert.deepEqual(array, [2, 5])
  })

  it('should return -200 in the zero index and 200 in the last index', () => {
    let array = genRanNum(1, 100, 10);

    array.push(-200)
    array.unshift(200)
    insertionSort(array);

    assert.deepEqual(array[0], -200)
    assert.deepEqual(array[11], 200)
  })

  it('should sort array of positive and neg numbers', () => {
    let array = genRanNum(-10, 10, 100);

    insertionSort(array);
    assert.deepEqual(array, array.sort(function compareNumbers(a, b) {
      return a - b;
    }))
  })

  it('should return a large sorted number array', () => {
    let array = genRanNum(1, 200, 75000);

    insertionSort(array);
    assert.deepEqual(array, array.sort(function compareNumbers(a, b) {
      return a - b;
    }))
  })

  it('should return a sorted alphabet array', () => {
    let array = ['d', 'e', 'a', 'c', 'b'];

    insertionSort(array);
    assert.deepEqual(array, ['a', 'b', 'c', 'd', 'e'])
  })

  it('should return a sorted alphabet array with uppercase letters', () => {
    let array = ['D', 'E', 'A', 'C', 'B'];

    insertionSort(array);
    assert.deepEqual(array, ['A', 'B', 'C', 'D', 'E'])
  })

  it('should return a large sorted alphabet array', () => {
    let array = genRandomAlphaArray(28800);

    insertionSort(array);
    assert.deepEqual(array, array.sort())
  })
})
