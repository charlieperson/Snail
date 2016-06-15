function Snail() {
}

Snail.prototype.spiral = function(input){
  var solution = input[0];
  var snailRemaining = input.splice(1, input.length);


  console.log('enter for loop');
  for(i=0; i<snailRemaining.length; i++) {
    var rowLength = snailRemaining[i].length;
    solution.push(snailRemaining[i][rowLength-1]);
    snailRemaining[i].splice(rowLength-1, 1);
  }

  var bottom = snailRemaining[snailRemaining.length-1].reverse();

  for(i=0; i<bottom.length; i++) {
    solution.push(bottom[i]);
  }
  console.log(solution);
};

array = [[1,2,3],
         [4,5,6],
         [7,8,9]];

array = [[4,5],
         [7,8]];
