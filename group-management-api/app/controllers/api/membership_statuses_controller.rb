class Api::MembershipStatusesController < ApplicationController

  def index
    render json: MembershipStatus.all
  end
end
