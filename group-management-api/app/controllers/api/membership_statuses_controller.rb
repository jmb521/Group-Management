class Api::MembershipStatusesController < ApplicationController

  def index
    @membership_statuses = MembershipStatus.all
    render json: @membership_statuses, :include => {:user => {:include => :user_info}}

  end
end
