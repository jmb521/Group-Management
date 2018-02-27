class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  has_many :user_kids

  has_one :user_contact_info, :autosave => true
  has_one :user_family, :autosave => true
  has_one :membership_status, :autosave => true


  belongs_to :club
  before_create :build_membership_status
  accepts_nested_attributes_for :user_contact_info, :user_family
  :has_secure_password
end
