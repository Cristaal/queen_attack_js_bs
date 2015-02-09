var queenAttack = function(start, attack) {
  if ((start[0] === attack[0]) || (start[1] === attack[1])) {
    return true;
  } else if (Math.abs((start[0] - attack[0]) === (start[1] - attack[1])))  {
    return true;
  } else if (Math.abs((start[0] + attack[0]) === (start[1] + attack[1])))  {
    return true;
  } else if (((start[0] - 1) === attack[0]) && ((start[1] + 1) === attack[1])) {
    return true;
  } else if (((start[0] + 1) === attack[0]) && ((start[1] - 1) === attack[1])) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {
    var start = ($("input#start").val().split(","));
    var attack = ($("input#attack").val().split(","));
    var result = queenAttack(start, attack);

    $(".attack").text(attack);

    if (result) {
      $(".not").empty();
    }

    else if (!result) {
      $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
