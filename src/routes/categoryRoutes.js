const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const auth = require("../middleware/authMiddleware");

// Create a new category 
router.post("/", auth, createCategory);

// Get all categories 
router.get("/", getAllCategories);

// Get a single category 
router.get("/:id", getCategoryById);

// Update a category 
router.put("/:id", auth, updateCategory);

// Delete a category
router.delete("/:id", auth, deleteCategory);

module.exports = router;
