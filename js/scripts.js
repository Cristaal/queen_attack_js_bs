var queenAttack = function(start, attack) {
  if ((start[0] === attack[0]) || (start[1] === attack[1])) {
    return true
  } else {
      return false;
  }
};
