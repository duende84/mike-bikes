class Api::V1::OrdersController < ApplicationController
  skip_forgery_protection only: :create

  def create
    result = SaveOrder.call({
      email: order_params['email'],
      total: order_params['total'],
      courses: order_params['courses'],
      products: order_params['products']
    })

    if result.success?
      render json: { data: true }, status: :ok
    else
      render json: { errors: result.message }, status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.require(:order).permit(:email, :total,
      { courses: [:id, :name, :price, :quantity]},
      { products: [:id, :name, :price, :quantity]}
    )
  end
end
