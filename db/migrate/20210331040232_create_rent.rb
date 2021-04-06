class CreateRent < ActiveRecord::Migration[6.1]
  def change
    create_table :rents do |t|
		t.string :description
      	t.date :days
      	t.integer :rating
    	t.references :user, null: false, foreign_key: true
   	   	t.references :book, null: false, foreign_key: true
    	t.timestamps
    end
  end
end
