class RemoveAuthoridFromBook < ActiveRecord::Migration[6.1]
  def change
    remove_reference :books, :author, null: false, foreign_key: true
  end
end
