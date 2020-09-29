class Api::V1::StagesController < ApplicationController
  def index
    render json: Stage.all, status: 200
  end
end