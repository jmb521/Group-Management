class DropEventsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :event_invites
    drop_table :events

  end
end
