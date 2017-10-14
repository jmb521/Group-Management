class Addmembernumbertomembershipstatus < ActiveRecord::Migration[5.1]
  def change
    add_column :membership_statuses, :member_number, :integer
  end
end
