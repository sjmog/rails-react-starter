class Api::V1::ItemCategoriesController < ApplicationController
  before_action :authenticate_user!

  def create
    item_category = ItemCategory.find_or_initialize_by(item_id: item_category_params[:item_id])

    item_category.update(item_category_params)

    render json: item_category
  end

  private

  def item_category_params
    params.require(:item_category).permit(:item_id, :category_id)
  end
end