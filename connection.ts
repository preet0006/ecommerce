import "dotenv/config";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: "require",
});

async function test() {
  const res = await sql`SELECT 1`;
  console.log("✅ Connected:", res);
  process.exit(0);
}

test().catch(console.error);
