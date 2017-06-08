function bubbleSort(arr) {
  var temp;

  for (var i = 0; i < arr.length; i++) {
    var finished = true;

    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        finished = false;
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    if (finished) return arr;
  }

  return arr;
}
