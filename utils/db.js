"use server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });

export async function getData() {
  try {
    const result = await db.select().from('useranswer'); // Example query
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
