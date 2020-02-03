class ProductUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick
  include Cloudinary::CarrierWave

  process :tags => ['hnr']

  version :thumbnail do
    resize_to_fit(200, 250)
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def public_id
    return "hnr/" + Cloudinary::Utils.random_public_id
  end
end
