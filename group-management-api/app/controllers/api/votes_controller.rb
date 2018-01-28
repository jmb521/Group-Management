class Api::VotesController < ApplicationController
  before_action :set_votes, only: [:show, :update]
  before_action :set_user, only: [:index, :show, :update]

  def index
    @vote = @user.vote
    render json: @vote
  end
  # def show
  #   @votes = @user.vote
  #   render json: @votes
  # end

  def update
    
    if @vote.update(vote_params)
      render json: @vote
    else
      render json: { message: @vote.errors}, status: 400
    end
  end



  def create
    @vote = Vote.new(vote_params)


    if @vote.save
      render json: @vote
    else
      render json: { message: @vote.errors}, status: 400
    end
  end
  private

  def set_votes

    @vote = Vote.find(params[:id])
  end
  def set_user
    @user = User.find_by(:id => params[:user_id])
  end

  def vote_params
    params.require(:vote).permit(:user_id, :number_of_votes)
  end

end
