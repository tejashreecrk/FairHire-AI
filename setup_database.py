import sqlite3

# create database
conn = sqlite3.connect("fairhire.db")

# run schema.sql
with open("backend/database/schema.sql", "r") as f:
    conn.executescript(f.read())

# run seed data
with open("backend/database/seed_data.sql", "r") as f:
    conn.executescript(f.read())

print("✅ Database created successfully!")

conn.close()