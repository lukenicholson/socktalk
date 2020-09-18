const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const { asyncHandler, handleValidationErrors } = require("../util");
const UserRepository = require("../../db/user-repo");
const { generateToken, authenticated } = require("../auth");

const router = express.Router();

const email = check("email")
  .isEmail()
  .withMessage("Please provide a valid email address")
  .normalizeEmail();


const password = check("password")
  .not()
  .isEmpty()
  .withMessage("Please provide a password");


router.post(
  "/",
  email,
  password,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }

    const user = await UserRepository.create(req.body);

    const { jti, token } = generateToken(user);
    user.tokenId = jti;
    await user.save();

    res.json({ token, user: user.toSafeObject() });
  })
);

module.exports = router;