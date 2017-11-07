class Dropandrecreateuserstable < ActiveRecord::Migration[5.1]
  def change
    drop_table :user


        create_table :users do |t|
          t.string :first_name
          t.string :last_name
          t.string :address1
          t.string :address2
          t.string :city
          t.string :state
          t.string :zipcode
          t.integer :club_id

      end
  end
end
