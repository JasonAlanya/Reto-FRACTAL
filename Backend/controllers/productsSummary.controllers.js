import { pool } from "../database/db.js";

export const getProductsSummary = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product_order_table ORDER BY id ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductSummary = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product_order_table WHERE id_order=?",
      [req.params.id]
    );

    if (result.length === 0)
      res.status(404).json({ message: "Result no found" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProductsSummary = async (req, res) => {
  try {
    const { id_order, id_product, quantity } = req.body;
    const [result] = await pool.query(
      "INSERT INTO product_order_table(id_order,id_product,quantity) VALUES (?,?,?)",
      [id_order, id_product, quantity]
    );
    res.json({
      id: result.insertId,
      id_order,
      id_product,
      quantity,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProductsSummary = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE product_order_table SET ? WHERE id= ?",
      [req.body, req.params.id]
    );

    if (result.affectedRows === 0)
      res.status(404).json({ message: "Result no found" });
    res.json("Changed item");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProductsSummary = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM product_order_table WHERE id=?",
      [req.params.id]
    );
    if (result.affectedRows === 0)
      res.status(404).json({ message: "Resultado no found" });
    res.json("Deleted item");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
