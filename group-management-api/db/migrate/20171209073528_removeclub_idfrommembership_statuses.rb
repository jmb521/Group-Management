class RemoveclubIdfrommembershipStatuses < ActiveRecord::Migration[5.1]
  def change
    remove_column :membership_statuses, :club_id
  end
end
