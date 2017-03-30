import { assert } from 'chai';
import genRandomAlphaArray from '../scripts/genRanAlphaArray'

describe('random number generator array', () => {
  it('should be a function', () => {
    assert.isFunction(genRandomAlphaArray);
  });

  it('should create an array with a length', () => {
    let array = genRandomAlphaArray(5);

    assert.isArray(array)
    assert.equal(array.length, 5)
  })
})
