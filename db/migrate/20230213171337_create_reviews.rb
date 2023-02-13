class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.string :review_body
      t.integer :rating
      t.integer :coffee_type_id

      t.timestamps
    end
  end
end
