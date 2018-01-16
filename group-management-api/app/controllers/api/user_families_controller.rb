  require 'pry'

class Api::UserFamiliesController < ApplicationController
  before_action :set_user_family
  before_action :set_user, only: [:index, :show, :update]
  def show
    @user_family = @user.user_family
    render json: @user_family
  end

  def create
    @user_family = UserFamily.new(user_family_params)

    if @user_family.save
      render json: @user_family
    else
      render json: { message: @user_family.errors }, status: 400
    end
  end

  def edit
  end

  def update
    
    if @user_family.update(user_family_params)
      render json: @user_family
    else
      render json: { message: @user_family.errors }, status: 400
    end
  end

  def destroy
    if @user_family.destroy
      render status: 204
    end
  end

  private

  def set_user_family
    @user_family = UserFamily.find(params[:id])
  end
  def set_user
    @user = User.find_by(:id => params[:user_id])
  end


  def user_family_params
    params.require(:user_family).permit(:user_id, :user_birthday, :spouse, :spouse_birthday)
  end

end
