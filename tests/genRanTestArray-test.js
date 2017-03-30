import { assert } from 'chai';
import genRanNum from '../scripts/genNumTestArray'

describe('random number generator array', () => {
  it('should be a function', () => {
    assert.isFunction(genRanNum);
  });

  it('should create an array with a length', () => {
    let array = genRanNum(1, 10, 5);

    assert.isArray(array)
    assert.equal(array.length, 5)
  })
})
