class Api::MembershipStatusesController < ApplicationController

  def index
    @membership_statuses = MembershipStatus.all
    render json: @membership_statuses

  end
end
