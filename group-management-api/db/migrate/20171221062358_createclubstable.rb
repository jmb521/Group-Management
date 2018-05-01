class Createclubstable < ActiveRecord::Migration[5.1]
  def change

    create_table :club_addresses do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.integer :club_id
    end
  end
end
