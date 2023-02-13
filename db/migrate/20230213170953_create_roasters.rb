class CreateRoasters < ActiveRecord::Migration[7.0]
  def change
    create_table :roasters do |t|
      t.string :name
      t.string :img_url
      t.string :website_url

      t.timestamps
    end
  end
end
