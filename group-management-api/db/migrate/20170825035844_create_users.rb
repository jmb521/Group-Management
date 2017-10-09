class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :club_id
      t.string :user_photo_url
      t.string :user_status

      t.timestamps
    end
  end
end
