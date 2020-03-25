class Api::V1::OrdersController < ApplicationController
  skip_forgery_protection only: :create

  def create
    OrderMailer.new_order_email(order_params['email'], order_params['products']).deliver_later
    return true
  rescue StandardError
    return false
  end

  private

  def order_params
    params.require(:order).permit(:email, { products: [:id, :name, :description, :price, :category_id, :quantity, image: {}]})
  end
end
