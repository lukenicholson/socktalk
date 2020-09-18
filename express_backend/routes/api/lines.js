const express = require('express');
// const bcrypt = require("bcryptjs");
// const { check, validationResult } = require("express-validator");

const { asyncHandler } = require('../util');
// const UserRepository = require("../../db/user-repo");
// const { generateToken, authenticated } = require("../auth");

const { Company, Slot } = require('../../db/models');
const router = express.Router();

router.get(
	'/:companyId',
	asyncHandler(async (req, res, next) => {
		const company = await Company.findByPk(req.params.companyId);

		const slots = await Slot.findAll({ where: { companyId: req.params.companyId } });
		res.json({
			company,
			slots
		});
	})
);

module.exports = router;
