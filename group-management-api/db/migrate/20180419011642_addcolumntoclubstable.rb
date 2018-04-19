class Addcolumntoclubstable < ActiveRecord::Migration[5.1]
  def change
    add_column :clubs, :club_login_id, :integer
  end
end
