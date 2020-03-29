class Product < ApplicationRecord
  has_many :order_items, as: :item
  belongs_to :category
  mount_uploader :image, ProductUploader
end
