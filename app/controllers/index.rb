# GET ========================================
get '/' do
  erb :index
end

# get '/scoreboard/:player1/:player2'
#   erb :scoreboard
# end

# POST =========================================

post '/register' do
  @player_1 = Player.find_or_create_by_name(name: params[:player1])
  @player_2 = Player.find_or_create_by_name(name: params[:player2])
  @new_game = Game.create(complete: false)
  @player_1.games << @new_game
  @player_2.games << @new_game
  erb :new_game
end

post '/winner' do
  game = Game.find(params[:game_id])
  game.update_attributes(complete: true, winner_id: params[:player_id])
end
