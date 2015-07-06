var brute = function() {
  // start by placing the first queen
  for (var i=0; i<size; i++) {
    for (var j=0; j<size; j++) {
      pos = '#'+i+''+j;
      cell = $(pos);
      setQueen(cell);
    }
  }
};

var solve = function (rows, columns) {
  var y = rows - 1;
  if (rows && columns) {
    return placeQueen(y, columns);
  }
};
 
var placeQueen = function (y, columns, prevSolution) {
  var out = [],
      cell, coordinate,
      // kick off the recursive run
      playbook = solve(y, columns);
    
    for (var i = 0; i < playbook.length; i++) {

      var place = playbook[i];

      for (var x = 0; x < columns; x++) {
        if (!death(y, x, place)) {
          out.push(place.concat([x]));
          coordinate = '#' + i + '' + x;
          console.log(coordinate);
          cell = $(coordinate);
          setQueen(cell);
        }
      }
// http://rosettacode.org/wiki/N-queens_problem#Javascript
    }

    return out;
};
 
var death = function (y, x, place) {
  for (var i = 0; i < y; i++) {
    if ( place[i] === x || place[i] + i === x + y || place[i] - i === x - y) {
      return true;
    }
  }
  return false;
};