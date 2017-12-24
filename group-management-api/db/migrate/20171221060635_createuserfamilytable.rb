class Createuserfamilytable < ActiveRecord::Migration[5.1]
  def change
    create_table(:user_families) do |t|
      t.column :user_id, :integer
      t.column :user_birthday, :string
      t.column :spouse, :string
      t.column :spouse_birthday, :string
    end
  end
end
