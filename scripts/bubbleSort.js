const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        var temp = array[j];

        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
}


export default bubbleSort
