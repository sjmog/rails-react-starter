Rails.application.routes.draw do
  devise_for :users
  
  namespace :api do
    namespace :v1 do
    end
  end

  root '/', controller: 'main', action: 'index'

  # React Router handles routing for non-API routes
  get '*path', to: 'main#index'
end
