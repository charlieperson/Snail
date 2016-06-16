function Snail() {
}

Snail.prototype.spiral = function(input){
  var solution = input[0];
  var snailRemaining = input.splice(1, input.length);

  for(i=0; i<snailRemaining.length; i++) {
    solution.push(snailRemaining[i][snailRemaining[i].length-1]);
    snailRemaining[i].splice(snailRemaining[i].length-1, 1);
  }

  var bottom = snailRemaining[snailRemaining.length-1].reverse();
  snailRemaining.splice(snailRemaining.length-1, 1);


  for(i=0; i<bottom.length; i++) {
    solution.push(bottom[i]);
  }

  for(i=0; i<snailRemaining[0].length; i++){
    solution.push(snailRemaining[0][i]);
  }

  return solution;
};
