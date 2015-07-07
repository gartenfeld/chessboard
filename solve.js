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
      cell, coordinate;
      // kick off the recursive run
      // console.log('calling solve ' + y + ', ' + columns);
      playbook = solve(y, columns);
      // console.log('playbook: ', JSON.stringify(playbook));
    
    for (var i = 0; i < playbook.length; i++) {

      var play = playbook[i];
      // console.log('item ' + i + ' in playbook: ' + JSON.stringify(play));

      for (var x = 0; x < columns; x++) {

        // console.log('testing conflict: ' + y + ', ' + x + ' : ' + death(y, x, play));
        
        if (!death(y, x, play)) {
          out.push(play.concat([x]));
        }
      }
    }
    //console.log('output: ', JSON.stringify(out));
    return out;
};
 
var death = function (y, x, play) {
  for (var i = 0; i < y; i++) {
    if ( play[i] === x || play[i] + i === x + y || play[i] - i === x - y) {
      return true;
    }
  }
  return false;
};

var clear = function (size) {
  var coordinate, cell;
  for (var i = 0; i < size; i++) {
    for (var j =0; j < size; j++) {
    coordinate = '#' + i + '' + j;
    cell = $(coordinate);
    removeQueen(cell);
    }
  }
};

var render = function (playbook, delay) {
  var max = playbook.length - 1;
  renderOne(playbook, 0, max, delay);

};

var renderOne = function(playbook, which, max, delay) {
  var play = playbook[which];
  var coordinate, cell;
  
  clear(size);

  for (var i=0; i<play.length; i++) {
    coordinate = '#' + i + '' + play[i];
    cell = $(coordinate);
    setQueen(cell);
  }  

  if (which < max) {
    setTimeout(function(){
      renderOne(playbook, which + 1, max);
    }, delay);
  }
};