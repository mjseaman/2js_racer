class CreatePlayersAndGames < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.timestamps
    end

    add_index(:players, :name, unique: true)

    create_table :games do |t|
      t.string :winner
      t.timestamps
    end

    create_table :games_players do |t|
      t.belongs_to :player
      t.belongs_to :game
    end
  end
end

