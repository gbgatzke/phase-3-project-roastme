Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/roasters', to: 'roaster#index'
  post '/roasters', to: 'roaster#create'

  get '/coffee_types', to: 'coffee_type#index'
  get '/coffee_types/:id', to: 'coffee_type#show'
  post '/coffee_types', to: 'coffee_type#create'

  get '/reviews', to: 'review#index'
  get '/reviews', to: 'review#show'
  post '/reviews', to: 'review#create'
  patch '/reviews', to: 'review#update'
  delete '/reviews/:id', to: 'review#destroy'
  
  
end
