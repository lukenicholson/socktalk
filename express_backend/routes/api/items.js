const express = require("express");

const { asyncHandler } = require("../util");

const { Company, Item } = require('../../db/models');
const router = express.Router();

router.get('/:companyId/:type', asyncHandler(async (req, res, next) => {
  const { companyId, type }= req.params;
  const company = await Company.findByPk(companyId);

  const items = await Item.findAll({ where: { companyId: companyId, type: type.toLowerCase() } });
  res.json({
    items
  })
}));

router.post('/:companyId/new', asyncHandler(async (req, res, next) => {

  const { name, type, imgSrc } = req.body;
  const { companyId } = req.params;

  let item = await Item.create({name, type, imgSrc, companyId})

  res.json({ item })
}))

router.delete('/:id', asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  await Item.destroy({ where: { id }})
  res.json({ id })
}))

module.exports = router;