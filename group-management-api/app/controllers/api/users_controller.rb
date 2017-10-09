class Api::UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy, :show]

  def index
    render json: User.all, :include => [:user_kids, :user_info]
  end

  def show
  end

  def create

    @user = User.new(user_params)
    @user.build_user_infos
    @user.build_user_families
    @user.build_user_contact_infos
    @user.build_user_kids
    if @user.save
      render json: @user
    else
      render json: { message: @user.errors }, status: 400
    end
  end
  def edit
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { message: @user.errors}, status: 400
    end
  end


  def destroy

  end



  private
    def set_user
      @user = User.find(params[:id])

    end

    def user_params
      params.require(:user).permit(
      :username,
      :password,
      :club_id,
      :user_photo_url,
      :user_status,
      {user_kids: []},
      user_info_attributes: [:user_id, :first_name, :last_name, :address1, :address2, :city, :state, :zipcode],
      user_family_attributes: [:user_id, :user_birthday, :spouse, :spouse_birthday],
      user_contact_infos: [:user_id, :email, :home_phone, :text_message, :preferred_method]
      )
    end
end
