class Api::V1::CoursesController < ApplicationController
  def index
    result = LoadAcademy.call

    if result.success?
      render json: { data: result.courses }, status: :ok
    else
      render json: { errors: result.message }, status: :unprocessable_entity
    end
  end
end