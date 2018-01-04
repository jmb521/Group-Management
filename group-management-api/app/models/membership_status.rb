class MembershipStatus < ApplicationRecord
  belongs_to :user
  
  after_initialize :init
  def init
    self.is_member ||= "pending"

  end

end
