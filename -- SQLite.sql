-- SQLite
CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  arrivalDate TEXT,
  departureDate TEXT,
  petsNumber INTEGER,
  roomType TEXT,
  userName TEXT,
  userTelephone TEXT,
  userEmail TEXT
);
