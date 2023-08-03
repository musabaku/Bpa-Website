const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Property = require("../models/propertyModel.js");
const ApiFeatures = require("../utils/apifeatures");

// exports.getAllProperty = catchAsyncErrors(async (req, res, next) => {

//   const property = await Property.find();

//   res.status(200).json({
//     success: true,
//     property,
//   });
// });

exports.getAllProperty = catchAsyncErrors(async (req, res, next) => {
  // return next(new ErrorHandler("musab not found", 404));
  const resultPerPage = 8;
  const PropertyCount = await Property.countDocuments();

  let apiFeatures = new ApiFeatures(Property.find(), req.query)
    .search()
    .filter();

  apiFeatures.pagination(resultPerPage);

  let property = await apiFeatures.query;

  let filteredPropertyCount = await Property.find(
    apiFeatures.filter().search().query.getFilter() // getFilter() returns the filters of the query
  ).countDocuments();

  res
    .status(200)
    .json({
      success: true,
      property,
      PropertyCount,
      resultPerPage,
      filteredPropertyCount,
    });
});

exports.createProperty = async (req, res, next) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json({
      success: true,
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPropertyDetails = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  res.status(200).json({
    success: true,
    property,
  });
});

exports.updateProperty = catchAsyncErrors(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (!property) {
    return next(new ErrorHandler("Property not found", 404));
  }

  property = await Property.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });
  res.status(200).json({
    success: true,
    property,
  });
});

exports.deleteProperty = catchAsyncErrors(async (req, res, next) => {
  await Property.findOneAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
});
