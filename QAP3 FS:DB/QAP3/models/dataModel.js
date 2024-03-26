const pool = require("../dal/database");

async function getAllData() {
  try {
    const query = "SELECT * FROM employees";
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("error retrieving data:", error);
    throw error;
  }
}

module.exports = { getAllData };
