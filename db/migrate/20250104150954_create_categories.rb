class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.references :product, null: false, foreign_key: true
      t.string :category

      t.timestamps
    end
  end
end
