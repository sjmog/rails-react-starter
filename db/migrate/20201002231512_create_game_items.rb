class CreateGameItems < ActiveRecord::Migration[6.0]
  def change
    create_table :game_items do |t|
      t.references :game, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
