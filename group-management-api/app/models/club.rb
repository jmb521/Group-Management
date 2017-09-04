class Club < ApplicationRecord
  has_many :users
  has_many :events
  has_many :membership_statuses, :through => :user, :autosave => true
  has_many :membership_statuses
  before_create :build_membership_status
end
