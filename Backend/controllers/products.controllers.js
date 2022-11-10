import { pool } from "../database/db.js";

export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM products_table ORDER BY id ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM products_table WHERE id=?",
      [req.params.id]
    );

    if (result.length === 0)
      res.status(404).json({ message: "Result no found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { product_name, product_category, product_price, product_status } =
      req.body;
    const [result] = await pool.query(
      "INSERT INTO products_table(product_name,product_category,product_price,product_status) VALUES (?,?,?,?)",
      [product_name, product_category, product_price, product_status]
    );
    res.json({
      id: result.insertId,
      product_name,
      product_category,
      product_price,
      product_status,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE products_table SET ? WHERE id= ?",
      [req.body, req.params.id]
    );

    if (result.affectedRows === 0)
      res.status(404).json({ message: "Result no found" });
    res.json("Changed item");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM products_table WHERE id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      res.status(404).json({ message: "Result no found" });
    res.json("Deleted item");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
