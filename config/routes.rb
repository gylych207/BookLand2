Rails.application.routes.draw do
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :books do
    resources :categories
  	resources	:rents
    collection do
    	post :filters
	  end
  end
  get '/allCategories', to: 'categories#allCategories'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users
 
end
