function genRandomAlphaArray (length) {
  var letters = 'abcdefghijklmnopqrstuvwxyz'
  var alphaArray = [];

  for (let i = 0; i < length; i++) {
    alphaArray.push(letters.charAt(Math.floor(Math.random() * letters.length)))
  }
  return alphaArray;
}

export default genRandomAlphaArray
