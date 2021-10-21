const router = require("express").Router();
const respondent = require("../controllers/respondent.controller");

// Welcoming page and prompts question
router.get("/", respondent.questionPage);

// Responses submitted confirmation page
router.get("/submitted", respondent.submittedPage);

router.post("/response", respondent.response);

router.get("/results", respondent.resultsPage);

module.exports = router;