class Api::EventInvitesController < ApplicationController
  before_action :set_event_invites, only: [:index, :update, :destroy]
  def index
    render json: EventInvite.all
  end

  def show

  end

  def create
    @event_invites = EventInvites.new(event_invites_params)
    if @event_invites.save
      render json: @event_invites
    else
      render json: { message: @event_invites.errors }, status: 400
    end
  end

  def new
  end

  def update
    if @event_invites.update(event_invites_params)
      render json: @event_invites
    else
      render json: { message: @event_invites.errors }, status: 400
    end
  end

  def edit
  end

  def destroy
    if @event_invites.destroy
      render status: 204
    end
  end

  private

  def set_event_invites
    @event_invites = EventInvites.find(params[:id])
  end

  def event_invites_params
    params.require(:event_invites).permit(:event_id, :user_id, :comments, :is_attending)
  end
end
