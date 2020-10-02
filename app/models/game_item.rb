class GameItem < ApplicationRecord
  belongs_to :game
  belongs_to :item
end
