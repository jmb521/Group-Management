class Club < ApplicationRecord

  has_one :club_address
  has_many :users
  has_secure_password


end
