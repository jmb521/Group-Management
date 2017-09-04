class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy, :new]
  def index
    render json: Event.all
  end

  def show
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    else
      render json: { message: @event.errors }, status: 400
    end

  end

  def new
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: { message: @event.errors }, status: 400
    end
  end

  def edit
  end

  def destroy
    if @event.destroy
      render status: 204
    end
  end


  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:club_id, :name, :description, :date, :time, :public, :location, :invitation_sent, :reminder_date)
  end
end
