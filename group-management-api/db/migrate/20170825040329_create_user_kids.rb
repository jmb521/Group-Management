class CreateUserKids < ActiveRecord::Migration[5.1]
  def change
    create_table :user_kids do |t|
      t.integer :user_id
      t.string :kid_name
      t.string :kid_birthday

      t.timestamps
    end
  end
end
