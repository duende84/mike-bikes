class Api::V1::OrdersController < ApplicationController
  skip_forgery_protection only: :create

  def create
    OrderMailer.new_order_email(order_params['email'], order_params['products']).deliver_later
    return true

    # @order = Order.new(order_params)
    # if @order.save
    #   flash[:succes] = "Thank for you order"
    # else
    #   flash.now[:error] = "yout order form had errors."
    #   render :new
    # end
  end

  private

  def order_params
    params.require(:order).permit(:email, { products: [:id, :name, :description, :price, :category_id, :created_at, :updated_at, :quantity, image: {}]})
  end
end
