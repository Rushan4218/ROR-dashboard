class DashboardController < ApplicationController
  
  before_action :authenticate_user!
  def dashboard
    # This is the controller for the dashboard page
  end
end
