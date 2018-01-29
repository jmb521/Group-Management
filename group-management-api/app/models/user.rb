class User < ApplicationRecord
  has_many :user_kids

  has_one :user_contact_info, :autosave => true
  has_one :user_family, :autosave => true
  has_one :membership_status, :autosave => true
  has_one :vote, :autosave => true

  belongs_to :club
  before_create :build_membership_status, :build_vote, :build_user_contact_info
  accepts_nested_attributes_for :user_contact_info, :user_family
  :has_secure_password
end
