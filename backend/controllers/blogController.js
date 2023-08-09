const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js")
const Blog = require("../models/blogModel.js")

exports.getAllBlog = catchAsyncErrors(async(req,res,next)=>{
  const blogs = await Blog.find()
  const BlogCount = await Blog.countDocuments();

  res.status(200).json({
    success:true,
    blogs,
    BlogCount
  })
})

exports.getAdminBlog = catchAsyncErrors(async (req, res, next) => {

  const blogs = await Blog.find();

  res.status(200).json({
    success: true,
    blogs,
  });
});
exports.getBlogDetails = catchAsyncErrors(async(req,res,next)=>{
  
  const blog = await Blog.findById(req.params.id)

  res.status(200).json({
    success:true,
    blog
  })
})
exports.updateBlog = catchAsyncErrors(async(req,res,next)=>{
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler("Blog not found", 404));
  }

  blog = await Blog.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  res.status(201).json({
    success: true,
    blog,
  });
})
exports.deleteBlog = catchAsyncErrors(async(req,res,next)=>{
  const blog = await Blog.findByIdAndDelete(req.params.id);

  if (!blog) {
    return next(new ErrorHandler("Blog not found", 404));
  }
  res.status(200).json({
    success:true,
    
  })
})

// exports.createBlog = catchAsyncErrors(async(req,res,next)=>{
//   req.body.user = req.user.id;
//   const blogs = await Blog.create(req.body)

//   res.status(200).json({
//     success:true,
//     blogs
//   })
// })

exports.createBlog = async (req, res, next) => {
  try {
    const blogs = await Blog.create(req.body)

    res.status(201).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};