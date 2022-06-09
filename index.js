// var input = [];
// var input = [1];
// var input = [1, -1];
// var input = [-1, 0, -3, -1, 0, 0, -2, -1, 0]
// var input = [2, 0, 3, 4, 0, 9, 7, 0, 4, 1];
// var input = [-1, 0, -3, -1, 0, 0, -2, -1, 0, 2, 0, 3, 4, 0, 9, 7, 0, 4, 1]
var input = [1, 3, -3, 0, -1, 0];

function groupNumbers(input) {
  if (input.length === 0 || input.length === 1) return input;

  var left = 0;
  var right = input.length - 1;

  for (var i = input.length - 2; i >= 0; i--) {
    if (input[i] > 0) {
      [input[i], input[right]] = [input[right], input[i]];
    }
    if (input[right] !== 0) right--;
  }

  for (var j = 1; j < input.length; j++) {
    if (input[j] < 0 && input[left] === 0) {
      [input[left], input[j]] = [input[j], input[left]];
    }

    if (input[left] !== 0) left++;
  }

  return input;
}

var output = groupNumbers(input);
console.log(output);
