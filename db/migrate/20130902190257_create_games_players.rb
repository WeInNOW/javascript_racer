class CreateGamesPlayers < ActiveRecord::Migration
  def change
    create_table :games_players do |t|
      t.integer :player_id
      t.integer :game_id
    end
    add_index :games_players, [:player_id, :game_id], unique: true
  end
end
