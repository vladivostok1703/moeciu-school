import express from "express";
import sql from "mssql";

const app = express();
app.use(express.json());

const dbConfig = {
  user: "admin_school",
  password: "moeciu_PA89",
  server: "ms-pa-server.database.windows.net",
  database: "moeciu-schoolDB",
  options: {
    encrypt: true,
  },
};

app.get("/api/data", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query("SELECT * FROM dbo.test2");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database query failed");
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
