CREATE TABLE farms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  city VARCHAR(120),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  farm_id INTEGER REFERENCES farms(id) ON DELETE SET NULL,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role VARCHAR(40) NOT NULL DEFAULT 'farmer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE fields (
  id SERIAL PRIMARY KEY,
  farm_id INTEGER NOT NULL REFERENCES farms(id) ON DELETE CASCADE,
  name VARCHAR(120) NOT NULL,
  crop_type VARCHAR(80),
  hectares NUMERIC(6, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE robots (
  id SERIAL PRIMARY KEY,
  farm_id INTEGER NOT NULL REFERENCES farms(id) ON DELETE CASCADE,
  name VARCHAR(120) NOT NULL,
  status VARCHAR(40) NOT NULL DEFAULT 'idle',
  location VARCHAR(120),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  farm_id INTEGER NOT NULL REFERENCES farms(id) ON DELETE CASCADE,
  assigned_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  title VARCHAR(180) NOT NULL,
  priority VARCHAR(20) NOT NULL DEFAULT 'medium',
  status VARCHAR(20) NOT NULL DEFAULT 'open',
  scheduled_for TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO farms (name, city)
VALUES ('Enggård Agro', 'Herning');

INSERT INTO users (farm_id, name, email, password_hash, role)
VALUES (
  1,
  'Mikkel Jensen',
  'landmand@markstyring.dk',
  '$2b$10$LKaxpOvRgoO0/0t9edCYK.Up4jd7yC3OwXs3QS9pT41A04qk1hzu.',
  'owner'
);

INSERT INTO robots (farm_id, name, status, location)
VALUES
  (1, 'Markrobot 1', 'working', 'Nordmarken'),
  (1, 'Markrobot 2', 'charging', 'Maskinhuset'),
  (1, 'Markrobot 3', 'ready', 'Sydengen');

INSERT INTO tasks (farm_id, assigned_user_id, title, priority, status, scheduled_for)
VALUES
  (1, 1, 'Tjek vandingsanlæg', 'high', 'open', CURRENT_TIMESTAMP),
  (1, 1, 'Planlæg gødning for mark 7', 'medium', 'open', CURRENT_TIMESTAMP + INTERVAL '2 hours');
