// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  var count = 0;
  while (num != 0) {
    num = num & (num - 1);
    count++;
  }
  return count;
}

console.log(result(number));
