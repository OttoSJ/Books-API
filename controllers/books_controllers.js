// DEPENDENCIES
// DEPENDENCIES
const Books = require("../models/books");
const asyncHandler = require("express-async-handler");

const getBooks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get books" });
});

const setBooks = asyncHandler(async (req, res) => {
  //   if (!req.body.id) {
  //     res.status(400);
  //     throw new Error("Please select a book");
  //   }
  res.status(200).json({ message: `Set Books ${req.params.id}` });
});

const updateBooks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Books ${req.params.id}` });
});

const deleteBooks = asyncHandler(async (req, res) => {
  res.status(200).json({ messeage: `Delete Books ${req.params.id}` });
});

module.exports = {
  getBooks,
  setBooks,
  updateBooks,
  deleteBooks,
};
