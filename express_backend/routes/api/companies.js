const express = require("express");

const { asyncHandler } = require("../util");

const { Company, Item, Slot } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
  const companies = await Company.findAll();

  res.json({ companies });
}))

router.get(
  "/:companyId",
  asyncHandler(async (req, res, next) => {
    const company = await Company.findByPk(req.params.companyId);
    console.log(req.params.companyId);
    const items = await Item.findAll({
      where: { companyId: req.params.companyId },
    });
    res.json({
      company,
      items,
    });
  })
);

module.exports = router;