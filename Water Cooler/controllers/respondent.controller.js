const { count } = require("../models/Respondent");
const respondent = require("../models/Respondent");

exports.questionPage = (req, res) => {
    res.render("question", { title: "Good morning!"});
};

exports.submittedPage = (req, res) => {
    res.render("submitted", { title: "Thanks for checking in!"});
};

exports.respondentResponse = async (req, res) => {
    const respondent = new respondent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        response: req.body.response,
    });

    await respondent.save();

    res.redirect("/submitted")
}

exports.resultsPage = async (req, res) => {   
    const pineappleNo = await (await respondent.find({response:"0"})).length;
    const pineappleYes = await (await respondent.find({response:"1"})).length;

    res.render("results", {title: "Here are the results!", pineappleNo, pineappleYes});
};