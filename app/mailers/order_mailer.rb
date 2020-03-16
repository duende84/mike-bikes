class OrderMailer < ApplicationMailer
  def new_order_email(email, product_ids)
    @email = email
    @product_ids = product_ids
    mail(to: 'santiago.1701625983@ucaldas.edu.co', subject: "New Order from #{email}")
  end
end
