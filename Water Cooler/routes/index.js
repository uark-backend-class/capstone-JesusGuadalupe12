const router = require("express").Router();
const member = require("../controllers/member.controller");

// Welcoming page and prompts question
router.get("/", member.questionPage);

// Responses submitted confirmation page
router.get("/submitted", member.submittedPage);

router.post("/memberResponse", member.memberResponse);

router.get("/results", member.resultsPage);

module.exports = router;