# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180501044727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "club_addresses", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.integer "club_id"
  end

  create_table "clubs", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "membership_statuses", force: :cascade do |t|
    t.string "is_member"
    t.integer "user_id"
    t.string "membership_paid"
    t.integer "club_id"
    t.datetime "updated_at"
  end

  create_table "user_addresses_tables", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "club_id"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "state"
    t.string "zipcode"
  end

  create_table "user_contact_infos", force: :cascade do |t|
    t.integer "user_id"
    t.string "email"
    t.string "home_phone"
    t.string "text_message"
    t.string "preferred_method"
  end

  create_table "user_families", force: :cascade do |t|
    t.integer "user_id"
    t.string "user_birthday"
    t.string "spouse"
    t.string "spouse_birthday"
  end

  create_table "user_kids", force: :cascade do |t|
    t.integer "user_id"
    t.string "kid_name"
    t.string "kid_birthday"
  end

  create_table "user_roles", force: :cascade do |t|
    t.string "role"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "club_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
