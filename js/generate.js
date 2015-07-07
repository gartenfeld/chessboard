var generate = function(n) {
  var row, cell, cellHTML, coordinate;
  for (var i=0; i<n; i++) {
    row = $('<tr></tr>');
    for (var j=0; j<n; j++) {
      coordinate = i.toString()+j.toString();
      cellHTML = '<td id="'+coordinate+'"></td>';
      cell = $(cellHTML);
      // setQueen(cell);
      row.append(cell);
    }
    $("#chess_board").append(row);
  }
};

var setQueen = function(cell) {
  cell.append('<a>&#9818;</a>');
};

var removeQueen = function(cell) {
  cell.empty();
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

var render = function (playbook) {
  var max = playbook.length - 1;
  renderOne(playbook, 0, max);
};

var renderOne = function(playbook, which, max) {
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