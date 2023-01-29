const express=require('express');
const { createBlogCategory, updateBlogCategory, deleteBlogCategory, getBlogCategory, getallBlogCategory } = require('../controller/blogCategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/AuthMiddleware');
const router=express.Router();


router.post('/',authMiddleware,isAdmin,createBlogCategory)
router.put('/:id',authMiddleware,isAdmin,updateBlogCategory)
router.delete('/:id',authMiddleware,isAdmin,deleteBlogCategory)
router.get('/:id',getBlogCategory)
router.get('/',getallBlogCategory)
module.exports=router