class Createuserrolestable < ActiveRecord::Migration[5.1]
  def change
    create_table :user_roles do |t|
      t.string :admin
      t.string :user

  end
end
