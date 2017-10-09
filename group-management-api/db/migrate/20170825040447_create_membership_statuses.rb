class CreateMembershipStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :membership_statuses do |t|
      t.integer :user_id
      t.integer :club_id
      t.string :membership_status
      t.string :payment_status
      t.datetime :payment_date

      t.timestamps
    end
  end
end
