class Api::UserAddressesController < ApplicationController
  before_action :set_user_addresses, only: [:update, :destroy, :show]
  before_action :set_club, only: [:index, :create]
  def index

    @user_addresses = @user.user_addresses
    # render json: @user_addressess, :include => [:membership_status]
    render json: @user_addresses
  end

  def show
  end

  def create

    @user_addresses = UserAddresses.new(user_addresses_params)

    # @user_addresses.build_user_family
    # @user_addresses.build_user_contact_info
    # @user_addresses.build_membership_status


    if @user_addresses.save
      render json: @user_addresses
    else
      render json: { message: @user_addresses.errors }, status: 400
    end
  end
  def edit
  end

  def update
    if @user_addresses.update(user_addresses_params)
      render json: @user_addresses
    else
      render json: { message: @user_addresses.errors}, status: 400
    end
  end


  def destroy

  end



  private
    def set_user_addresses
      @user_addresses = UserAddresses.find(params[:id])

    end

    def set_club
      @club = Club.find_by(:id => params[:club_id])
    end



    def user_addresses_params
      params.require(:user_addresses).permit(
      :first_name,
      :last_name,
      :club_id,
      :address1,
      :address2,
      :city,
      :state,
      :zipcode,
      )
    end
end
