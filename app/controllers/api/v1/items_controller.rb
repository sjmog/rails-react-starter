class Api::V1::ItemsController < ApplicationController
  def index
    render json: Item.all, status: 200
  end
end