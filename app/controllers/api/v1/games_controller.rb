class Api::V1::GamesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: Game.all, status: 200
  end
end