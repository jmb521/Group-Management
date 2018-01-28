class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.column :user_id, :integer
      t.column :number_of_votes, :integer

      t.timestamps
    end
  end
end
