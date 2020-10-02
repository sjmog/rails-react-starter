Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :show]
      resources :categories, only: [:index]
      resources :item_categories, only: [:create]
      resources :games, only: [:index, :show] do
        resources :items, only: [:index, :show]
      end
    end
  end

  root '/', controller: 'main', action: 'index'

  # React Router handles routing for non-API routes
  get '*path', to: 'main#index'
end
