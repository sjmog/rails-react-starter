class Api::V1::ItemStagesController < ApplicationController
  def create
    item_stage = ItemStage.find_or_initialize_by(item_id: item_stage_params[:item_id])

    item_stage.update(item_stage_params)

    render json: item_stage
  end

  private

  def item_stage_params
    params.require(:item_stage).permit(:item_id, :stage_id)
  end
end