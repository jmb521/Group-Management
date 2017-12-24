class Createmembershiptable < ActiveRecord::Migration[5.1]
  def change
    create_table(:membership_statuses) do |t|
      t.column :is_member, :string
      t.column :user_id, :integer
      t.column :membership_paid, :string
      t.column :club_id, :integer
    end
  end
end
