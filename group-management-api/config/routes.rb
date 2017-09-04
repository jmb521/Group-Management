Rails.application.routes.draw do
  namespace :api do
    resources :event_invites
    resources :events
    resources :membership_statuses
    resources :user_kids
    resources :user_families
    resources :user_contact_infos
    resources :user_infos
    resources :users
    resources :clubs

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
