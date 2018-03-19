class Api::UsersController < ApplicationController
skip_before_action :authenticate_request, only: %i[login register]
  def register
    @user = User.create(user_params)
   if @user.save
    response = { message: 'User created successfully'}
    render json: response, status: :created
   else
    render json: @user.errors, status: :bad
   end
  end
  def login

    authenticate params[:email], params[:password]

  end
  def test
    render json: {
      message: 'You have passed authentication and authorization test'
      }
  end

private

def authenticate(email, password)

  command = AuthenticateUser.call(email, password)
  if command.success?

    render json: {
      access_token: command.result,
      message: 'Login Successful'
    }
  else
    render json: { error: command.errors }, status: :unauthorized
  end
end

def user_params
  params.permit(
    :name,
    :email,
    :password,
    :club_id
  )
end
end
  # before_action :set_user, only: [:update, :destroy, :show]
  # before_action :set_club, only: [:index, :create]
  # def index
  #
  #   @user = @club.users
  #   # render json: @users, :include => [:membership_status]
  #   render json: @user, :include => [:user_kids, :membership_status, :user_contact_info, :user_family]
  # end
  #
  # def show
  # end
  #
  # def create
  #
  #   @user = User.new(user_params)
  #
  #   # @user.build_user_family
  #   # @user.build_user_contact_info
  #   @user.build_membership_status
  #
  #
  #   if @user.save
  #     render json: @user
  #   else
  #     render json: { message: @user.errors }, status: 400
  #   end
  # end
  # def edit
  # end
  #
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: { message: @user.errors}, status: 400
  #   end
  # end
  #
  #
  # def destroy
  #
  # end
  #
  #
  #
  # private
  #   def set_user
  #     @user = User.find(params[:id])
  #
  #   end
  #
  #   def set_club
  #     @club = Club.find_by(:id => params[:club_id])
  #   end
  #
  #
  #
  #   def user_params
  #     params.require(:user).permit(
  #     :first_name,
  #     :last_name,
  #     :club_id,
  #     :address1,
  #     :address2,
  #     :city,
  #     :state,
  #     :zipcode,
  #     user_kids: [:user_id, :kid_name, :kid_birthday ],
  #     user_family_attributes: [:user_id, :user_birthday, :spouse, :spouse_birthday],
  #     user_contact_infos: [:user_id, :email, :home_phone, :text_message, :preferred_method],
  #     )
  #   end
# end
