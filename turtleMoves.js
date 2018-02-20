'use strict';

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function steps(moves) {

  let final = [];

  final = moves.filter(value => {
    if (value[0] < 0 || value[1] < 0) {
      return false;
    } else {
      return true;
    }
  }).map(value => value[0] + value[1]);

  return final.forEach(value => console.log(value));
  
}

steps(turtleMoves);
