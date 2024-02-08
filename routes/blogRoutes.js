const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");


router.get('/', blogController.blog_index);

router.post("/",blogController.blog_create_post)

router.get('/create' , blogController.blog_create_get);

// URL parameters
router.get('/:id'/*:id (call whatever you want ) denotes our url parameter */, blogController.blog_details)

router.delete('/:id', blogController.blog_delete)

module.exports = router;