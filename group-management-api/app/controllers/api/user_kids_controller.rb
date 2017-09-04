class Api::UserKidsController < ApplicationController

  def index
    render json: UserKid.all
  end

  def show
    render json: @user_kids
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

  def user_kid_params
    params.require(:user_kid).permit(:user_id, :kid_name, :kid_birthday)
  end
end
