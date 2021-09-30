const router = require("express").Router();
const member = require("../controllers/member.controller");

// Welcoming page and prompts question
router.get("/", member.greetPage);

// Responses submission confirmation page
router.get("/submission", member.submissionPage);

module.exports = router;