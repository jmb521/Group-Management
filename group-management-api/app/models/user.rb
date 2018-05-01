class User < ApplicationRecord

  has_one :user_role
  has_many :user_kids

  has_one :user_contact_info, :autosave => true
  has_one :user_family, :autosave => true
  has_one :membership_status, :autosave => true


  belongs_to :club
  before_create :build_membership_status
  accepts_nested_attributes_for :user_contact_info, :user_family
  has_secure_password
  validates_presence_of :username, :email, :password_digest
  validates :email, uniqueness: true

end
