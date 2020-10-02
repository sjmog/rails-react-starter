class Game < ApplicationRecord
  has_many :game_items
  has_many :items, through: :game_items
end
