class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :web_property_id
      t.string :type
      t.string :ip_address

      t.timestamps
    end
  end
end
