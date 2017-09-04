class CreateUserFamilies < ActiveRecord::Migration[5.1]
  def change
    create_table :user_families do |t|
      t.integer :user_id
      t.string :user_birthday
      t.string :spouse
      t.string :spouse_birthday

      t.timestamps
    end
  end
end
