class Api::V1::EventsController < ApplicationController
  def index
    result = LoadEvents.call

    if result.success?
      render json: { data: result.events }, status: :ok
    else
      render json: { errors: result.message }, status: :unprocessable_entity
    end
  end
end