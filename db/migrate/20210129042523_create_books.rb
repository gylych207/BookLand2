class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :category
      t.string :condition
      t.string :isbn
      t.string :image_url
      t.integer :price
      t.references :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end
