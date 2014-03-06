/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var b = new Board({'n':n});
  var conflicts = $.extend(true, [], b.rows());
  var pieces = $.extend(true, [], b.rows());
  var solution = [];
  var max = 0;
  var iterations = 0; //check time complexity

  var recurse = function(pieces, conflicts, count){
    var foundNextPiece = false;
    var scope = n;

    // core recursion process
    for (var x = 0; x < scope; x++){
      for (var y = 0; y < scope; y++){
        if (!conflicts[x][y]){
          var p = $.extend(true, [], pieces);
          var c = $.extend(true, [], conflicts);
          foundNextPiece = true;
          p[x][y] = 1;
          c = window.addRookConflicts(x,y,c);
          recurse(p, c, count+1);
        }
      }
    }
    // exit conditions and clean-up
    if (!foundNextPiece){
      if (count > max){
        max = count;
        solution = pieces;
      }
      return;
    }
  };

  recurse(pieces, conflicts, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution), ' iterations: ', iterations);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// helper that updates the conflicts matrix when rook is added at (x, y)
window.addRookConflicts = function(x, y, conflicts){
  for (var i = 0; i < conflicts.length; i++){
    conflicts[i][y] = 1;
  }
  for (var j = 0; j < conflicts.length; j++){
    conflicts[x][j] = 1;
  }
  return conflicts;
}


// helper that updates the conflicts matrix when rook is added at (x, y)
window.addQueenConflicts = function(x, y, conflicts){
  return conflicts;
}
