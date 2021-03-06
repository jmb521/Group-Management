class Api::UserKidsController < ApplicationController
  before_action :set_user_kid, only: [:show, :update, :destroy, :index]
  before_action :set_user, only: [:index, :show, :update]
  # def index
  #   @user_kids = @user.user_kids
  #   render json: @user_kids
  # end

  def show
    @user_kid = @user.user_kid
    render json: @user_kid
  end

  def create
    @user_kid = UserKid.new(user_kid_params)
    if @user_kid.save
      render json: @user_kid
    else
      render json: { message: @user_kid.errors }, status: 400
    end
  end

  def edit
  end

  def update
    if @user_kid.update(user_kid_params)
      render json: @user_kid
    else
      render json: { message: @user_kid.errors}, status: 400
    end
  end

  def destroy
    if @user_kid.destroy
      render status: 204
    end
  end

  private

  def set_user_kid
    @user_kid = UserKid.find(params[:id])
  end
  def set_user
    @user = User.find_by(:id => params[:user_id])
  end

  def user_kid_params
    params.require(:user_kid).permit(:user_id, :kid_name, :kid_birthday)
  end
end
