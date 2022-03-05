const express = require("express");
const router = express.Router();
const {
  getBooks,
  setBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/books_controllers");

router.get("/", getBooks);
router.post("/", setBooks);
router.put("/:id", updateBooks);
router.delete("/:id", deleteBooks);
module.exports = router;
