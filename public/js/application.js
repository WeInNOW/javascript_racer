$(document).ready(function(){
  function advancePlayer1(){
    var current_cell =  $("#player1_strip td.active");
    current_cell.next().addClass('active')
    current_cell.removeClass('active')

    if ($('#player1_strip td').last().attr('class') == "active"){
      recordWinner($("table").attr("data-game_id"), $("tr:first-child").attr("data-player_id"))
    }
  };


  function advancePlayer2(){
    var current_cell =  $("#player2_strip td.active");
    current_cell.next().addClass('active')
    current_cell.removeClass('active')

     if ($('#player2_strip td').last().attr('class') == "active"){
      recordWinner($("table").attr("data-game_id"), $("tr:nth-child(2)").attr("data-player_id"))
    }
  };

  function resetBoard(){
    $('td.active').removeClass('active')
    $('#player2_strip td').first().addClass('active')
    $('#player1_strip td').first().addClass('active')
  }

  function recordWinner(gameId, playerId){
    var url = "/winner"
    data = {game_id: gameId,
            player_id: playerId }
      console.log(data)
    $.post(url,data, function(){
      resetBoard();
    });
  }

  $(document).keyup(function(e){
    if(e.keyCode == 65){
    advancePlayer1()
    }
    if(e.keyCode == 76){
    advancePlayer2()
    }
  });
});


