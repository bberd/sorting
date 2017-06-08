function split(wholeArray) {
 var firstHalf = [],
     secondHalf = [];

var halfLength = Math.floor(wholeArray.length/2);

firstHalf = wholeArray.slice(0, halfLength);
  secondHalf = wholeArray.slice(halfLength, wholeArray.length);

return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  var mergedArr = [];

while (array1.length !== 0 && array2.length !== 0) {
  console.log(array1, array2)
     if (array1[0] > array2[0]) {
      mergedArr.push(array2.shift());
    } else {
      mergedArr.push(array1.shift());
    }
     if (array1.length === 0) mergedArr = mergedArr.concat(array2);
     if (array2.length === 0) mergedArr = mergedArr.concat(array1);
  }
  return mergedArr;
}

function mergeSort(currentArray) {
  var resultArr = [];
  if (currentArray.length <= 1) return currentArray;

  return merge(mergeSort(split(currentArray)[0]), mergeSort(split(currentArray)[1]));
}
