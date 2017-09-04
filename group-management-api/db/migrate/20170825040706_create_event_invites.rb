class CreateEventInvites < ActiveRecord::Migration[5.1]
  def change
    create_table :event_invites do |t|
      t.integer :event_id
      t.integer :user_id
      t.string :comments
      t.boolean :is_attending

      t.timestamps
    end
  end
end
