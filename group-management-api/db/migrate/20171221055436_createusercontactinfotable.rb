class Createusercontactinfotable < ActiveRecord::Migration[5.1]
  def change
    create_table(:user_contact_infos) do |t|
      t.column :user_id, :integer
      t.column :email, :string
      t.column :home_phone, :string
      t.column :text_message, :string
      t.column :preferred_method, :string
    end
  end
end
