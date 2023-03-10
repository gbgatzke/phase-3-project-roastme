# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_13_171337) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffee_types", force: :cascade do |t|
    t.bigint "roaster_id"
    t.string "blend_name"
    t.string "intensifier"
    t.string "origin"
    t.string "notes"
    t.string "muffin_pairing"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["roaster_id"], name: "index_coffee_types_on_roaster_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "reviewer_name"
    t.string "review_body"
    t.integer "rating"
    t.bigint "coffee_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_type_id"], name: "index_reviews_on_coffee_type_id"
  end

  create_table "roasters", force: :cascade do |t|
    t.string "name"
    t.string "img_url"
    t.string "website_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
