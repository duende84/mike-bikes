class Api::V1::OrdersController < ApplicationController
  skip_forgery_protection only: :create

  def create
    puts "1params: #{order_params['email']}"
    puts "2params: #{order_params['product_ids']}"
    OrderMailer.with(email: order_params['email'], product_ids: order_params['product_ids']).new_order_email.deliver_later
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
    params.require(:order).permit(:email, product_ids: [])
  end
end
