class Api::V1::ItemCategoriesController < ApplicationController
  def create
    # Master record the categories
    item_category = ItemCategory.find_or_initialize_by(item_id: item_category_params[:item_id])

    item_category.update(item_category_params)

    render json: item_category
  end

  # true if guess was right, false otherwise
  def compare
    item_category = ItemCategory.find(params[:item_id])

    correct = item_category.category_id == params[:category_id].to_i

    render plain: correct ? 'correct' : 'wrong'
  end

  private

  def item_category_params
    params.require(:item_category).permit(:item_id, :category_id)
  end
end