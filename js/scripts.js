var queenAttack = function(start, attack) {
  if ((start[0] === (attack[0] + 1)) || (start[0] === (attack[0] - 1))) {
    return true;
  } else if ((start[1] === (attack[1] + 1))) {
      return true;
    } else {
      return false;
  };
};
