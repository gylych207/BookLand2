class CreateBooksUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :books_users do |t|
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
