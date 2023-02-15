class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.string :review_body
      t.integer :rating
      t.belongs_to :coffee_type

      t.timestamps
    end
  end
end
