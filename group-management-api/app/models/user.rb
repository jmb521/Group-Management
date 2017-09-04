class User < ApplicationRecord
  has_many :user_kids
  has_one :user_info, :autosave => true
  has_one :user_contact_info, :autosave => true
  has_one :user_family, :autosave => true
  has_one :membership_status, :autosave => true
  has_and_belongs_to_many :events
  belongs_to :club


  before_create :build_user_info, :build_user_contact_info, :build_user_family, :build_membership_status
  accepts_nested_attributes_for :user_info, :user_contact_info, :user_family
end
