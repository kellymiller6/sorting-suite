import { assert } from 'chai';
import mergeSort from '../scripts/mergeSort'
import genRanNum from '../scripts/genNumTestArray'
import genRandomAlphaArray from '../scripts/genRanAlphaArray'

describe('merge sort', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('should return an array', () => {
    let array = [2, 5, 0, 1, 4, 3];
    let sorted = [];

    sorted = mergeSort(array);
    assert.isArray(sorted)
  })

  it('should sort an unsorted two number array', () => {
    let array = [5, 2];
    let sorted = [];

    sorted = mergeSort(array);
    assert.deepEqual(sorted, [2, 5])
  })

  it('should return -200 in the zero index and 200 in the last index', () => {
    let array = genRanNum(2, 100, 10);
    let sorted = []

    array.push(-200)
    array.unshift(200)
    sorted = mergeSort(array);

    assert.deepEqual(sorted[0], -200)
    assert.deepEqual(sorted[11], 200)
  })

  it('should sort array of positive and neg numbers', () => {
    let array = genRanNum(-10, 10, 100);
    let sorted = []

    sorted = mergeSort(array);
    assert.deepEqual(sorted, array.sort(function compareNumbers(a, b) {
      return a - b;
    }))
  })

  it('should return a large sorted number array', () => {
    let array = genRanNum(1, 200, 141500);
    let sorted = []

    sorted = mergeSort(array);
    assert.deepEqual(sorted, array.sort(function compareNumbers(a, b) {
      return a - b;
    }))
  })

  it('should return a sorted alphabet array', () => {
    let array = ['d', 'e', 'a', 'c', 'b'];
    let sorted = []

    sorted = mergeSort(array);
    assert.deepEqual(sorted, ['a', 'b', 'c', 'd', 'e'])
  })

  it('should return a sorted alphabet array with uppercase letters', () => {
    let array = ['D', 'E', 'A', 'C', 'B'];
    let sorted = []

    sorted = mergeSort(array);
    assert.deepEqual(sorted, ['A', 'B', 'C', 'D', 'E'])
  })

  it('should return a large sorted alphabet array', () => {
    let array = genRandomAlphaArray(90000);
    let sorted = [];

    sorted = mergeSort(array);
    assert.deepEqual(sorted, array.sort())
  })
})
