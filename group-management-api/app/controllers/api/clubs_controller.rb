class Api::ClubsController < ApplicationController
  before_action :set_club, only: [:show, :update, :destroy, :new]

  def index
    @clubs = Club.all
    render json: @clubs
  end
  def show
    render json: @club

  end

  def create

    @club = Club.new(club_params)
    if @club.save
      render json: @club
    else
      render json: { message: @club.errors }, status: 400
    end

  end

  def edit
  end

  def update

    if @club.update(club_params)
      render json: @club
    else
      render json: { message: @club.errors}, status: 400
    end
  end

  def destroy
    if @club.destroy
      render status: 204
    end
  end

  private

    def set_club
      @club = Club.find(params[:id])
    end

    def club_params
      params.require(:club).permit(:name, :address, :city, :state, :zipcode)
    end

end
