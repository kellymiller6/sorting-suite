const insertionSort = (unsortedArray) => {
  for (var i = 1; i < unsortedArray.length; i++) {
    var temp = unsortedArray[i];

    for (var j = i - 1; j >= 0 && unsortedArray[j] > temp; j--) {
      unsortedArray[j + 1] = unsortedArray[j];
    }
    unsortedArray[j + 1] = temp;
  }
}

export default insertionSort
