class Api::UserContactInfosController < ApplicationController

  def show
  end

  def create
    @user_contact_infos = UserContactInfos.new(user_contact_infos_params)
    if @user_contact_infos.save
      render json: @user_contact_infos
    else
      render json: { message: @user_contact_infos.errors }, status: 400
    end
  end

  def edit
  end

  def update
    if @user_contact_infos.update(user_contact_infos_params)
      render json: @user_contact_infos
    else
      render json: { message: @user_contact_infos.errors }, status: 400
    end
  end

  def destroy
    if @user_contact_infos
      render status: 204
    end
  end

  private

  def set_user_contact_infos
    @user_contact_infos = UserContactInfos.find(params[:id])
  end

  def user_contact_infos_params
    params.require(:user_contact_infos).permit(:user_id, :email, :home_phone, :text_message, :preferred_method)
  end

end
