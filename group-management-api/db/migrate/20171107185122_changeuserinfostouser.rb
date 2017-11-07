class Changeuserinfostouser < ActiveRecord::Migration[5.1]
  def change
    rename_table :user_infos, :user
  end
end
