Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/roasters', to: 'roaster#index'
  get '/roasters/:id', to: 'roaster#show'
  get '/roaster_coffees/:id', to: 'roaster#roaster_coffees'
  get '/roaster_average/:id', to: 'roaster#average_rating'
  post '/roaster_create', to: 'roaster#create'
  delete '/roaster_delete/:id', to: 'roaster#destroy'

  get '/coffee_types', to: 'coffee_type#index'
  get '/coffee_types/:id', to: 'coffee_type#show'
  get '/coffee_types_roaster/:id', to: 'coffee_type#roaster'
  get '/coffee_types_average/:id', to: 'coffee_type#average_rating'
  post '/coffee_type_create', to: 'coffee_type#create'

  get '/reviews', to: 'review#index'
  get '/reviews/:id', to: 'review#show'
  post '/reviews_create', to: 'review#create'
  patch '/reviews_update/:id', to: 'review#update'
  delete '/reviews_delete/:id', to: 'review#destroy'
end
