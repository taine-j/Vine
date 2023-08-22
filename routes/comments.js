const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");




// upload = requiring multer. Multer takes the file and helps you upload it while checking the file. 
router.post("/createComment/:id", commentsController.createComment);



module.exports = router;