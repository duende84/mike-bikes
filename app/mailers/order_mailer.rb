class OrderMailer < ApplicationMailer
  def new_order_email(email, products)
    @email = email
    @products = products
    mail(to: ENV['EMAIL_RECEIVER'], subject: "New Order from #{email}")
  end
end
