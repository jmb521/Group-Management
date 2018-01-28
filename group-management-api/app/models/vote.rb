class Vote < ApplicationRecord
  belongs_to :user
  after_initialize :init
  def init
    self.number_of_votes ||= 0

  end
end
