class Api::UserContactInfosController < ApplicationController
  before_action :set_user_contact_info, only: [:index, :show, :update]
  before_action :set_user, only: [:index, :show, :update]
  def show
    @user_contact_info = @user.user_contact_info
    render json: @user_contact_info
  end

  def create
    @user_contact_info = UserContactInfo.new(user_contact_info_params)
    if @user_contact_info.save
      render json: @user_contact_info
    else
      render json: { message: @user_contact_info.errors }, status: 400
    end
  end

  def edit
  end

  def update
    if @user_contact_info.update(user_contact_info_params)
      render json: @user_contact_info
    else
      render json: { message: @user_contact_info.errors }, status: 400
    end
  end

  def destroy
    if @user_contact_info
      render status: 204
    end
  end

  private

  def set_user_contact_info
    @user_contact_info = UserContactInfo.find(params[:id])
  end
  def set_user
    @user = User.find_by(:id => params[:user_id])
  end

  def user_contact_info_params
    params.require(:user_contact_info).permit(:user_id, :email, :home_phone, :text_message, :preferred_method)
  end

end
