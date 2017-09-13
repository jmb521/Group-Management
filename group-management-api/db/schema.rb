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

ActiveRecord::Schema.define(version: 20170901173511) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clubs", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event_invites", force: :cascade do |t|
    t.integer "event_id"
    t.integer "user_id"
    t.string "comments"
    t.boolean "is_attending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "club_id"
    t.string "name"
    t.string "description"
    t.datetime "date"
    t.string "time"
    t.boolean "public"
    t.string "location"
    t.date "invitation_sent"
    t.date "reminder_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events_users", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.index ["event_id"], name: "index_events_users_on_event_id"
    t.index ["user_id"], name: "index_events_users_on_user_id"
  end

  create_table "membership_statuses", force: :cascade do |t|
    t.integer "user_id"
    t.integer "club_id"
    t.boolean "is_member"
    t.boolean "membership_paid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_contact_infos", force: :cascade do |t|
    t.integer "user_id"
    t.string "email"
    t.string "home_phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "text_message"
    t.string "preferred_method"
  end

  create_table "user_families", force: :cascade do |t|
    t.integer "user_id"
    t.string "user_birthday"
    t.string "spouse"
    t.string "spouse_birthday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_infos", force: :cascade do |t|
    t.integer "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_kids", force: :cascade do |t|
    t.integer "user_id"
    t.string "kid_name"
    t.string "kid_birthday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.integer "club_id"
    t.string "user_photo_url"
    t.string "user_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "events_users", "events"
  add_foreign_key "events_users", "users"
end