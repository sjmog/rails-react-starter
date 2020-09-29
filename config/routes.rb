Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :show]
      resources :stages, only: [:index]
      resources :item_stages, only: [:create]
    end
  end

  root '/', controller: 'main', action: 'index'

  # React Router handles routing for non-API routes
  get '*path', to: 'main#index'
end
