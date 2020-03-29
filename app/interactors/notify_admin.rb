class NotifyAdmin
  include Interactor

  def call
    OrderMailer.new_order_email(context.email, context.courses, context.products).deliver_later
  end
end