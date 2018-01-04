class Api::MembershipStatusesController < ApplicationController
  before_action :set_membership_status, only: [:update, :destroy, :new, :show]
  before_action :set_user, only: [:index, :show, :update]
  # def index
  #   @membership_statuses = MembershipStatus.all
  #   render json: @membership_statuses
  # end
  def show
    @membership_status = @user.membership_status

    render json: @membership_status
  end

  def update
    if @membership_status.update(membership_status_params)
      render json: @membership_status
    else
      render json: { message: @membership_status.errors}, status: 400
    end
  end

  def create
    @membership_status = MembershipStatus.new(club_id: @user.club_id)
    if @membership_status.save
      render json: @membership_status
    else
      render json: {message: @membership_status.errors}, status: 400
    end
  end


private
  def set_membership_status
    @membership_status = MembershipStatus.find(params[:id])
  end

  def set_user
    @user = User.find_by(:id => params[:user_id])
  end

  def membership_status_params
    params.require(:membership_status).permit(:user_id, :is_member, :membership_paid, :club_id, :created_at, :updated_at)
  end
end
