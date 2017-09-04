Models:

Club
  has_many Users, has_many events

User
has_one user_info, has_one user_contact_info, has one user_family, has_many user_kids, has_one membership_status through club


User_info
  belongs_to user

user_contact_info
  belongs_to User

user_family
  belongs_to User

user_kids
  belongs_to User

membership_status
  belongs_to user

events
  belongs_to club
  has_many event_invitees

event_invitees
  belongs_to events
