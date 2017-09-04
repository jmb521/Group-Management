class CreateUserContactInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :user_contact_infos do |t|
      t.integer :user_id
      t.string :email
      t.string :home_phone

      t.timestamps
    end
  end
end
