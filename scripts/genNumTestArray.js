function genRanNum (min, max, length) {

  var testArray = []

  for (let i = 0; i < length; i++) {
    testArray.push(Math.floor(Math.random() * (max - (-min)) + (-min)));
  }
  return testArray
}

export default genRanNum
