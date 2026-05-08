const { Client } = require('pg');

const connectionString = "postgresql://postgres:3DdIo3NbsPZJjhkZ@db.ukmpcwtjcgfsvfkfsxfw.supabase.co:5432/postgres";

const client = new Client({
  connectionString: connectionString,
});

async function test() {
  try {
    console.log("Connecting to:", connectionString);
    await client.connect();
    console.log("Successfully connected!");
    const res = await client.query('SELECT NOW()');
    console.log("Query result:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("Connection error:", err);
  }
}

test();
