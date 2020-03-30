class ProductUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  THUMBNAIL_WIDTH = 200

  process :tags => ['hnr-product']

  version :thumbnail do
    resize_to_fit(THUMBNAIL_WIDTH, nil)
  end

  version :retina_thumbnail do
    resize_to_fit(THUMBNAIL_WIDTH * 2, nil)
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def public_id
    return "hnr/" + Cloudinary::Utils.random_public_id
  end
end
