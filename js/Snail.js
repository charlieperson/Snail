function Snail() {
}

Snail.prototype.spiral = function(input){

  var solution = input[0];
  var snailRemaining = input.splice(1, input.length);

  console.log("solution = ");
  console.log(solution);

  console.log("snail remaining = ");
  console.log(snailRemaining);

  console.log('enter for loop');
  for(i=0; i<snailRemaining.length; i++) {
    console.log('current item = ' + snailRemaining[i]);
    solution.push(snailRemaining[i].slice(-1)[0]);
    console.log("current solution = " + solution);
  }
};

array = [[1,2,3,6],
         [4,5,6,5],
         [7,8,9,4],
         [7,8,9,4]];
