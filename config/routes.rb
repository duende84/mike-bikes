Rails.application.routes.draw do
  root 'pages#index'
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # module: The Folder
  # path: The URI
  scope module: :api, defaults: { format: :json }, path: 'api' do
    scope module: :v1, path: 'v1' do
      resources :products, only: [:index]
      resources :courses, only: [:index]
      resources :events, only: [:index]
      resources :orders, only: [:create]
    end
  end

  match '*path', to: 'pages#index', via: :all
end
