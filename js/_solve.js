var solve = function (rows, columns) {
  var y = rows - 1;
  if (rows > 0) {
    return placeQueen(y, columns);
  } else {
    return [[]];
  }
};
 
var placeQueen = function (y, columns) {
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
 
var death = function (y, x, candidate) {
  for (var i = 0; i < y; i++) {
    if ( candidate[i] === x || candidate[i] + i === x + y || candidate[i] - i === x - y) {
      return true;
    }
  }
  return false;
};
