import { pool } from "../database/db.js";

export const getOrders = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM order_table ORDER BY id ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM order_table WHERE id=?", [
      req.params.id,
    ]);

    if (result.length === 0)
      res.status(404).json({ message: "Result no found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const {
      order_status,
      date,
      customer,
      city_tax,
      county_tax,
      state_tax,
      federal_tax,
      total_taxes,
      total_amount,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO order_table(order_status,date,customer,city_tax,county_tax,state_tax,federal_tax,total_taxes,total_amount) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        order_status,
        date,
        customer,
        city_tax,
        county_tax,
        state_tax,
        federal_tax,
        total_taxes,
        total_amount,
      ]
    );
    res.json({
      id: result.insertId,
      order_status,
      date,
      customer,
      city_tax,
      county_tax,
      state_tax,
      federal_tax,
      total_taxes,
      total_amount,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE order_table SET ? WHERE id= ?", [
      req.body,
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      res.status(404).json({ message: "Result no found" });
    res.json("Changed item");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM order_table WHERE id=?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      res.status(404).json({ message: "Result no found" });
    res.json("Deleted item");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
