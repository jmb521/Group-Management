class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :club_id
      t.string :name
      t.string :description
      t.datetime :date
      t.string :time
      t.boolean :public
      t.string :location
      t.date :invitation_sent
      t.date :reminder_date

      t.timestamps
    end
  end
end
