const express = require('express');
// const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator');

const { asyncHandler, handleValidationErrors } = require('../util');
const UserRepository = require('../../db/user-repo');
const { generateToken, authenticated } = require('../auth');

const router = express.Router();

const email = check('email').isEmail().withMessage('Please provide a valid email address').normalizeEmail();

const password = check('password').not().isEmpty().withMessage('Please provide a password');

router.post(
	'/',
	[ email, password ],
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return next({ status: 422, errors: errors.array() });
		}

		const { email, password } = req.body;
		const user = await UserRepository.findByEmail(email);
		console.log(user.email);

		if (!user.isValidPassword(password)) {
			const err = new Error('login failed');
			err.status = 401;
			err.title = 'Login failed';
			err.errors = [ 'Invalid credentials' ];
			return next(err);
		}

		const { jti, access_token } = generateToken(user);
		user.tokenId = jti;
		await user.save();

		res.json({ access_token, user: user.toSafeObject() });
	})
);

router.delete(
	'/',
	[ authenticated ],
	asyncHandler(async (req, res, next) => {
		req.user.tokenId = null;
		await req.user.save();
		res.json({ message: 'success' });
	})
);

module.exports = router;
