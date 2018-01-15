Rails.application.routes.draw do
  namespace :api do


    resources :clubs do
      resources :users
      resources :membership_statuses
    end
    resources :users do
      resources :membership_statuses, only: [:show, :edit, :update, :index]

      resources :user_kids
      resources :user_families
      resources :user_contact_infos
    end

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
