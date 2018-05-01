class CreateUserRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :user_roles do |t|
      t.string :admin
      t.string :user
      t.integer :user_id
      t.timestamps
    end
  end
end
