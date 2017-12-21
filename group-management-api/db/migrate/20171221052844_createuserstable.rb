class Createuserstable < ActiveRecord::Migration[5.1]
  def change
    create_table(:users) do |t|
      t.column :first_name, :string
      t.column :last_name, :string
      t.column :club_id, :string
      t.column :address1, :string
      t.column :address2, :string
      t.column :city, :string
      t.column :state, :string
      t.column :zipcode, :string
    end
  end
end
