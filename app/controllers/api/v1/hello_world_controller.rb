# An example API controller
class Api::V1::HelloWorldController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: { hello: "world" }, status: 200
  end
end