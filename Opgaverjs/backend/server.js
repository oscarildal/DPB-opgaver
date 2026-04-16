import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import pg from "pg";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

app.get("/api/health", async (_request, response) => {
  try {
    await pool.query("SELECT 1");
    response.json({ ok: true, database: "connected" });
  } catch (error) {
    response.status(500).json({ ok: false, error: "Database unavailable" });
  }
});

app.post("/api/login", async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    response.status(400).json({ error: "Email og adgangskode er påkrævet" });
    return;
  }

  try {
    const result = await pool.query(
      `
        SELECT users.id, users.name, users.email, users.password_hash, farms.name AS farm_name
        FROM users
        LEFT JOIN farms ON farms.id = users.farm_id
        WHERE users.email = $1
      `,
      [email],
    );

    if (result.rowCount === 0) {
      response.status(401).json({ error: "Forkert login" });
      return;
    }

    const user = result.rows[0];
    const passwordMatches = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatches) {
      response.status(401).json({ error: "Forkert login" });
      return;
    }

    response.json({
      message: "Login lykkedes",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        farmName: user.farm_name || "Ukendt gård",
      },
    });
  } catch (error) {
    response.status(500).json({ error: "Serverfejl under login" });
  }
});

app.listen(port, () => {
  console.log(`Backend kører på http://localhost:${port}`);
});
