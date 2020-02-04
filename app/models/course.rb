class Course < ApplicationRecord
  mount_uploader :image, CourseUploader
end
