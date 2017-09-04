class Event < ApplicationRecord
  belongs_to :club
  has_and_belongs_to_many :users
  has_many :event_invites
end
