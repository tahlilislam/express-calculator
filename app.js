const express = require("express");
const {
  calculateMean,
  calculateMedian,
  calculateMode,
} = require("./calculator");
const ExpressError = require("./expressError");

const app = express();
app.use(express.json());

function validateInput(nums) {
  if (!nums) {
    throw new ExpressError("'nums' Parameter Required", 400);
  }
  // splits string into an array of substrings and converts it into number using map method
  // checks if converted value is NaN
  const numsArr = nums.split(",").map((num, index) => {
    const parsedNum = Number(num);
    if (isNaN(parsedNum)) {
      throw new ExpressError(`${num} is not a number.`, 400);
    }
    return parsedNum;
  });

  return numsArr;
}

app.get("/mean", function (req, res, next) {
  try {
    const nums = req.query.nums;
    const numsArr = validateInput(nums);
    const mean = calculateMean(numsArr);
    return res.json({ operation: "mean", value: mean });
  } catch (e) {
    next(e);
  }
});
app.get("/median", function (req, res, next) {
  try {
    const nums = req.query.nums;
    const numsArr = validateInput(nums);
    const median = calculateMedian(numsArr);
    return res.json({ operation: "median", value: median });
  } catch (e) {
    next(e);
  }
});
app.get("/mode", function (req, res, next) {
  try {
    const nums = req.query.nums;
    const numsArr = validateInput(nums);
    const mode = calculateMode(numsArr);
    return res.json({ operation: "mode", value: mode });
  } catch (e) {
    next(e);
  }
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

// Error handler-last ditch error handler
app.use(function (err, req, res, next) {
  //Note the 4 parameters!
  let status = err.status || 500;
  let message = err.message;
  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

// Starts server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
