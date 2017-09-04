class Api::UserInfosController < ApplicationController
  before_action :set_user_infos, only: [:show, :update, :destroy]

  def show
    render json: @user_infos
  end

  def create
    @user_infos = UserInfos.new(user_infos_params)
    if @user_infos.save
      render json: @user_infos
    else
      render json: { message: @user_infos.errors }, status: 400
    end
  end

  def edit
  end

  def update
    if @user_infos.update(user_infos_params)
      render json: @user_infos
    else
      render json: { message: @user_infos.errors }, status: 400
    end
  end

  def destroy
    if @user_infos.destroy
      render status: 204
    end
  end

  private

  def set_user_infos
    @user_infos = UserInfos.find(params[:id])
  end

  def user_infos_params
    params.require(:user_infos).permit(:user_id, :first_name, :last_name, :address1, :address2, :city, :state, :zipcode)
  end

end
