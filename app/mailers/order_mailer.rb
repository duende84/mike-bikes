class OrderMailer < ApplicationMailer
  def new_order_email(email, products)
    @email = email
    @products = products
    mail(to: [ENV['DEFAULT_ADMIN_EMAIL'], email], subject: "New Order from #{email}")
  end
end
