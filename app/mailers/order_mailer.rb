class OrderMailer < ApplicationMailer
  def new_order_email(email, courses, products)
    @email = email
    @courses = courses
    @products = products
    mail(to: [ENV['DEFAULT_ADMIN_EMAIL'], email], subject: "New Order from #{email}")
  end
end
