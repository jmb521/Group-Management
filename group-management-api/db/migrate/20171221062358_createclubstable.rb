class Createclubstable < ActiveRecord::Migration[5.1]
  def change

    create_table(:clubs) do |t|
      t.column :name, :string
      t.column :address, :string
      t.column :city, :string
      t.column :state, :string
      t.column :zipcode, :string
    end
  end
end
