Rails.application.routes.draw do
  root 'home#index'
  post '/submit-interest', to: 'home#submit_interest'  # Ajoute ça
end