import { createPool } from "mysql2/promise";

//Main data to access the database
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "J4son853",
  database: "order_mamagement",
});
