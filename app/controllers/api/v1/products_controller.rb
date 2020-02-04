class Api::V1::ProductsController < ApplicationController
  def index
    result = LoadShop.call

    if result.success?
      render json: { data: result.products }, status: :ok
    else
      render json: { errors: result.message }, status: :unprocessable_entity
    end
  end
end