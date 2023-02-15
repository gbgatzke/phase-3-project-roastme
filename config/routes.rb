Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/roasters', to: 'roaster#index'
  get '/roasters/:id', to: 'roaster#show'
  get '/roaster_coffees/:id', to: 'roaster#roaster_coffees'
  get '/roaster_average/:id', to: 'roaster#average_rating'

  get '/coffee_types', to: 'coffee_type#index'
  get '/coffee_types/:id', to: 'coffee_type#show'
  get '/coffee_types_roaster/:id', to: 'coffee_type#roaster'
  post '/coffee_types', to: 'coffee_type#create'

  get '/reviews', to: 'review#index'
  get '/reviews', to: 'review#show'
  post '/reviews', to: 'review#create'
  patch '/reviews', to: 'review#update'
  delete '/reviews/:id', to: 'review#destroy'
end
