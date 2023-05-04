const express = require('express')
const { renderSlash, postBudget } = require('../Controllers/budget.controller')
const router = express()

router.get("/", renderSlash)
router.post("/", postBudget)


module.exports = router