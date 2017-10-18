class Changeismembertostring < ActiveRecord::Migration[5.1]
  def change
    change_column :membership_statuses, :is_member, :string
  end
end
