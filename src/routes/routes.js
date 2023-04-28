const router = require('express').Router();
const { ruleset } = require('../controllers');

// GET localhost:8080/ruleset => Ambil data semua ruleset
router.get('/ruleset', ruleset.getDataRuleset);

// GET localhost:8080/ruleset/2 => Ambil data semua ruleset berdasarkan id = 2
router.get('/ruleset/:id', ruleset.getDataRulesetByID);

// POST localhost:8080/ruleset/add => Tambah data ruleset ke database
router.post('/ruleset/add', ruleset.addDataRuleset);

// POST localhost:8080/ruleset/2 => Edit data ruleset
router.post('/ruleset/edit', ruleset.editDataRuleset);

// POST localhost:8080/ruleset/delete => Delete data ruleset
router.post('/ruleset/delete/', ruleset.deleteDataRuleset);

module.exports = router;