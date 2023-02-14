Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/roasters', to: 'roaster#index'
  post '/roasters', to: 'roaster#create'

  get '/coffeetypes', to: 'coffee_type#index'
  post '/coffeetypes', to: 'coffee_type#create'

  get '/reviews/', to: 'review#index'
  post '/reviews', to: 'review#create'
end
