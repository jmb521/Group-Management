class ApplicationController < ActionController::API
  before_action :authenticate
  # attr_reader :current_user

  # include ExceptionHandler

  

  def logged_in?
    !!current_user
  end

  def current_user
    if auth_present?
      user = User.find(auth["user"])
      if user
        @current_user ||= user
      end
    end
  end

  def authenticate
    unless logged_in?
      render json: {error: "unauthorized"}, status: 401
    end
  end


    private

    def token
      request.env["HTTP_AUTHORIZATION"].scan(/Bearer
        (.*)$/).flatten.last
    end

    def auth
      Auth.decode(token)
    end

    def auth_present?
      !!request.env.fetch("HTTP_AUTHORIZATION",
      "").scan(/Bearer/).flatten.first
    end

end
