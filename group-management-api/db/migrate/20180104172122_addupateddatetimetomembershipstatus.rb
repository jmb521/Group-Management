class Addupateddatetimetomembershipstatus < ActiveRecord::Migration[5.1]
  def change
    add_column :membership_statuses, :updated_at, :datetime
  end
end
