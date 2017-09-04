class AddColumnToUserContactInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :user_contact_infos, :text_message, :bool
    add_column :user_contact_infos, :preferred_method, :string
  end
end
