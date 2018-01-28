class Api::VotesController < ApplicationController
  before_action :set_votes, only: [:index, :show, :update]
  before_action :set_user, only: [:index, :show, :update]

  def show
    @votes = @user.votes
    render json: @votes
  end

  def create
    @votes = Vote.new(vote_params)

    if @votes.save
      render json: @votes
    else
      render json: { message: @votes.errors}, status: 400
    end
  end

  def update
    if @votes.update(vote_params)
      render json: @votes
    else
      render json: { message: @votes.errors}, status: 400
    end
  end


  private

  def set_votes
    @votes = Vote.find(params[:id])
  end
  def set_user
    @user = User.find_by(:id => params[:user_id])
  end

  def vote_params
    params.require(:vote).permit(:user_id, :number_of_votes)
  end

end
