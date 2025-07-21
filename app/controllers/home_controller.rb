class HomeController < ApplicationController
  def index
  end

  def submit_interest
    # Traite le formulaire (e.g., envoie email ou stocke en DB plus tard)
    flash[:notice] = "Intérêt enregistré ! Merci."
    redirect_to root_path
  end
end
