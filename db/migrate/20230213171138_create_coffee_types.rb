class CreateCoffeeTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :coffee_types do |t|
      t.belongs_to :roaster
      t.string :blend_name
      t.string :intensifier
      t.string :origin
      t.string :notes
      t.string :muffin_pairing
      t.string :img_url

      t.timestamps
    end
  end
end
