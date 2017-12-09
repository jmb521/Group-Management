class MembershipStatus < ApplicationRecord
  belongs_to :user
  belongs_to :club
  after_initialize :init
  def init
    self.is_member ||= "pending"
  end

end
