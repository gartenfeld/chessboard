var solve = function (rows, columns) {
  var y = rows - 1;
  if (rows > 0) {
    return solveNextRow(y, columns);
  } else {
    return [[]];
  }
};
 
var solveNextRow = function (y, columns) {
  var out = [],
      // kick off the recursive run
      // console.log('calling solve ' + y + ', ' + columns);
      playbook = solve(y, columns);
      // console.log('playbook: ', JSON.stringify(playbook));
    
    for (var i = 0; i < playbook.length; i++) {

      var candidate = playbook[i];
      // console.log('item ' + i + ' in playbook: ' + JSON.stringify(candidate));

      for (var x = 0; x < columns; x++) {

        // console.log('testing conflict: ' + y + ', ' + x + ' : ' + death(y, x, candidate));
        
        if (!death(y, x, candidate)) {
          out.push(candidate.concat([x]));
        }

      }
    }
    //console.log('output: ', JSON.stringify(out));
    return out;
};

var sameColumn = function (existingQueenColumn, newQueenColumn) {
  return existingQueenColumn === newQueenColumn;
};

// slosh === backslash === \ === major
// where col increases as row increases
// thus the subtraction diff is constant
var sameSlosh = function (existingQueenSub, newQueenSub) {
  return existingQueenSub === newQueenSub;
};

// slash === forward slash === / === minor
// where col decreases as row increases
// thus the addition sum is constant
var sameSlash = function (existingQueenSum, newQueenSum) {
  return existingQueenSum === newQueenSum;
};


var death = function (r, c, candidate) {
  // candicate is a possible path: 
  // array of column-indices for each row
  var enemy; // an existing queen (represented by its column index)

  // iterate through the rows
  for (var i = 0; i < r; i++) {
    // check if the new placement at [r, c]
    // has conflicts with the queen in that row
    enemy = candidate[i];

    if (sameColumn(enemy, c) || 
        sameSlash(enemy + i, c + r) || 
        sameSlosh(enemy - i, c - r)) 
    { return true; }
  
  }
  return false;
};