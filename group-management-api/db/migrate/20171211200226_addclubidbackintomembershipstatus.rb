class Addclubidbackintomembershipstatus < ActiveRecord::Migration[5.1]
  def change
    add_column :membership_statuses, :club_id, :integer
  end
end
