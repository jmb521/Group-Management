class Api::UserFamiliesController < ApplicationController
  before_action :set_user_families, only: [:show, :update, :destroy]

  def show
    render json: @user_families
  end

  def create
    @user_families = UserFamilies.new(user_family_params)
    if @user_families.save
      render json: @user_families
    else
      render json: { message: @user_families.errors }, status: 400
    end
  end

  def edit
  end

  def update
    if @user_families.update(user_family_params)
      render json: @user_families
    else
      render json: { message: @user_families.errors }, status: 400
    end
  end

  def destroy
    if @user_families.destroy
      render status: 204
    end
  end

  private

  def set_user_families
    @user_families = UserFamilies.find(params[:id])
  end

  def user_family_params
    params.require(:user_families).permit(:user_id, :user_birthday, :spouse, :spouse_birthday)
  end

end
