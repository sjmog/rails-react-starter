class AddUserReferenceToItemCategories < ActiveRecord::Migration[6.0]
  def change
    add_reference :item_categories, :user, null: false, foreign_key: true
  end
end
