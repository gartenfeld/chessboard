var generateBoard = function(n) {
  var row, cell, cellHTML, coordinate;
  for (var i=0; i<n; i++) {
    row = $('<tr></tr>');
    for (var j=0; j<n; j++) {
      coordinate = i.toString()+j.toString();
      cellHTML = '<td id="'+coordinate+'"></td>'
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