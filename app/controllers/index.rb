enable :sessions
get '/' do
  erb :index
end

post '/game/start' do
  content_type :json
  player1 = Player.find_or_create_by_name(params[:player1])
  player2 = Player.find_or_create_by_name(params[:player2])
  game = Game.create() 
  session[:game_id] = game.id
  game.players << player1
  game.players << player2
  game.to_json
end

post '/game/end' do
  content_type :json
  puts "XXXXXXXXXXXXXXXXXXXXXXX"
  game = Game.find(session[:game_id])
  game.winner = game.players[params[:winner].to_i-1].name
  game.save
  p game.winner
  game.winner.to_json
end
