var oldArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var nonNumArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function removeXElement(arr, num) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (( i === 0) || (!((i+1)% num === 0))) {
      newArr.push(arr[i]);
    }
  }
return newArr;
}

threeLetterArr = removeXElement(nonNumArr, 3);
threeArr = removeXElement(oldArr, 3);
fourArr = removeXElement(oldArr, 4);

var testNumbers = [123,6];
var testNumbersTwo = [279,5];
var testNumbersThree = [1234,10];

function isEqualTo(arr) {
  var zeroIndexSplit = arr[0].toString().split('');
  var splitNumbers = [];
  var combinedNumber = 0;
  for (i = 0; i < zeroIndexSplit.length; i++) {
    splitNumbers.push(parseInt(zeroIndexSplit[i]));
  }
  for (j = 0; j < splitNumbers.length; j++) {
    combinedNumber += splitNumbers[j];
  }

  if (combinedNumber === arr[1]) {
    return true;
  } else {
    return false;
  }
}

testOne = isEqualTo(testNumbers);
