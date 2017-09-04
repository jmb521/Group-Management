class CreateMembershipStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :membership_statuses do |t|
      t.integer :user_id
      t.integer :club_id
      t.boolean :is_member
      t.boolean :membership_paid

      t.timestamps
    end
  end
end
