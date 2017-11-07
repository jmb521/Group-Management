class Addclubidtouserinfo < ActiveRecord::Migration[5.1]
  def change
    add_column :user_infos, :club_id, :integer
  end
end
