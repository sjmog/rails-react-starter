Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :show]
      resources :categories, only: [:index]
      resources :item_categories, only: [:create, :compare]

      get '/item_categories/compare', controller: 'item_categories', action: 'compare'
    end
  end

  root '/', controller: 'main', action: 'index'

  # React Router handles routing for non-API routes
  get '*path', to: 'main#index'
end
