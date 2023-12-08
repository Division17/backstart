//two ways of writting the handler 1) by promise 2) async

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//way2
// higher order function passing

// const asyncHandler =(requestHandler) => async(req, res, next) => {
//     try{

//     }
//     catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
