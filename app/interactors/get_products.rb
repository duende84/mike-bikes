class GetProducts
  include Interactor

  def call
    context.products = Product.take(100)
  end
end