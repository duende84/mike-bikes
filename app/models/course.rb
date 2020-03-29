class Course < ApplicationRecord
  has_many :order_items, as: :item
  mount_uploader :image, CourseUploader
end
