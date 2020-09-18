const router = require('express').Router();
// const api = require('./api');

const sessionRouter = require('./api/session');
const usersRouter = require('./api/users');
const linesRouter = require('./api/lines');
const companiesRouter = require('./api/companies');
const itemsRouter = require('./api/items');

router.use('/api/session', sessionRouter);
router.use('/api/users', usersRouter);
router.use('/api/lines', linesRouter);
router.use('/api/companies', companiesRouter);
router.use('/api/items', itemsRouter);

module.exports = router;