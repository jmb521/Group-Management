class Createuserkidstable < ActiveRecord::Migration[5.1]
  def change
    create_table(:user_kids) do |t|
      t.column :user_id, :integer
      t.column :kid_name, :string
      t.column :kid_birthday, :string

    end
  end
end
