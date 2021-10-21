const Respondents = require("../models/Respondent");
const email = require("../email")

exports.questionPage = (req, res) => {
    res.render("question", { title: "Good morning!"});
};

exports.submittedPage = (req, res) => {
    res.render("submitted", { title: "Thanks for checking in!"});
};

exports.response = async (req, res) => {
    const respondent = new Respondents({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        response: req.body.response,
    });
    
    const respondemntEmail = req.body.email;

    await email.send(respondemntEmail);
    await respondent.save();

    res.redirect("/submitted")
}

exports.resultsPage = async (req, res) => {
    const pineappleNo = await (await Respondents.find({response:"0"})).length;
    const pineappleYes = await (await Respondents.find({response:"1"})).length;

    //const respondents = await Respondents.find();
    //console.log(respondents);

    res.render("results", {title: "Here are the results!", pineappleNo, pineappleYes});
};