import { Pool } from 'pg'

let conn: any

if (!conn) {
  const port = process.env.ZAIKO_BD_POSTGRES_PORT || 3000;

  conn = new Pool({
    host: process.env.ZAIKO_BD_POSTGRES_HOST,
    port: parseInt(port.toString()),
    user: process.env.ZAIKO_BD_POSTGRES_USERNAME,
    password: process.env.ZAIKO_BD_POSTGRES_PASSWORD,
    database: process.env.ZAIKO_BD_POSTGRES_DATABASE
  });
}

export { conn };