class CreateOrder
  include Interactor

  def call
    if context.email && (context.courses || context.products)
      order = Order.create!(email: context.email, total: context.total)
      context.courses.map do |item|
        OrderItem.create!(order: order, item_id: item[:id], quantity: item[:quantity], item_type: 'Course')
      end
      context.products.map do |item|
        OrderItem.create!(order: order, item_id: item[:id], quantity: item[:quantity], item_type: 'Product')
      end
    else
      context.fail!(message: "Invalid params")
    end
  end
end