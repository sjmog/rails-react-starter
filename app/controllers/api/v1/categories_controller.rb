class Api::V1::CategoriesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: Category.all, status: 200
  end
end