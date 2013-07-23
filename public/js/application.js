$(document).ready(function(){
  for (var i=0;i<=track_length();i++){
    $("tr").append("<td></td>");
  }
  initialize_game();

  key_listener();

});

function track_length() {
  return 15;
}

function initialize_game() {
  $('td').removeClass('active');
  $('td:first-child').addClass('active');
}

function advance(player) {
  update_player_position(player,1);
}

function update_player_position(player,spaces) {
  var new_position = current_position(player) + spaces + 1;
  $('#' + player + ' td').removeClass('active');
  $('#'+ player + ' td:nth-child('+(new_position)+')').addClass('active');
}

function current_position(player) {
  return $('#'+ player +'').find('.active').index();
}

function key_listener() {
  $(document).on('keyup',function (e) {
    if (winner() == null)
    {
      if (e.which == 81) 
      {
        advance('p1');
      }
      if (e.which == 80) 
      {
        advance('p2');
      }
    }
    else
    {
      $(document).off('keyup');
      declare_winner();
    }
  });
}

function winner() {
  if (current_position('p1') == track_length()) 
  {
    return 1
  }
  if (current_position('p2') == track_length()) 
  {
    return 2
  }
  return null;
}

function declare_winner() {
  alert("Player "+winner()+" wins!");
  initialize_game();
  key_listener();
}


