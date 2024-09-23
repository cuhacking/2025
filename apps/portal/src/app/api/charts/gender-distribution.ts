import process from 'node:process'
import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'project_database',
  password: process.env.DB_PASSWORD || '1234',
  port: Number(process.env.DB_PORT) || 5432,
})

export async function GET() {
  try {
    const client = await pool.connect()

    const query = `
      SELECT gender, COUNT(*) as count
      FROM "User"
      GROUP BY gender;
    `
    const result = await client.query(query)
    client.release()

    return NextResponse.json({ data: result.rows })
  }
  catch (err) {
    console.error('Error fetching data from PostgreSQL', err)
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 })
  }
}
