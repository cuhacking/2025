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

    if (!client) {
      return NextResponse.json({ error: 'Database connection failed' }, { status: 500 })
    }

    const query = `
      SELECT gender, COUNT(*) as count
      FROM "User"
      GROUP BY gender;
    `
    const result = await client.query(query)

    if (result.rows.length === 0) {
      return NextResponse.json({ data: [] })
    }

    client.release()

    return NextResponse.json({ data: result.rows })
  }
  catch (err: any) {
    console.error('Error fetching data from PostgreSQL', err)

    if (err.message.includes('database connection')) {
      return NextResponse.json({ error: 'Database connection failed' }, { status: 500 })
    }
    else {
      return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
  }
}
