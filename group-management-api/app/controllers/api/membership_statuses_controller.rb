class Api::MembershipStatusesController < ApplicationController
  before_action :set_membership_status, only: [:show, :update, :destroy, :new]


  def show
    render json: @member
  end

  def update
    if @membership_status.update(membership_status_params)
      render json: @membership_status
    else
      render json: { message: @membership_status.errors}, status: 400
    end
  end


private
  def set_membership_status
    @membership_status = MembershipStatus.find(params[:id])
  end

  def membership_status_params
    params.require(:membership_status).permit(:user_id, :club_id, :is_member, :membership_paid)
  end
end
