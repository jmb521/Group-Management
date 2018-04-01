Rails.application.routes.draw do
  namespace :api do
    post '/auth/register', to: 'users#register'
    get '/test', to: 'users#test'
    # post '/auth/login', to: 'users#login'
    post '/login', to: "sessions#create"
    resources :clubs do
      resources :users
      resources :membership_statuses
    end
    resources :users do
      resources :membership_statuses, only: [:show, :edit, :update, :index]
      resources :user_addresses
      resources :user_kids
      resources :user_families
      resources :user_contact_infos
    end

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
