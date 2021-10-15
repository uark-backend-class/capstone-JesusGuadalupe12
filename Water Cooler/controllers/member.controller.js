const Member = require("../models/Member");

exports.questionPage = (req, res) => {
    res.render("question", { title: "Good morning!"});
};

exports.submittedPage = (req, res) => {
    res.render("submitted", { title: "Thanks for checking in!"});
};

exports.memberResponse = async (req, res) => {
    const member = new Member({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        responseA: req.body.responseA,
    });

    await member.save();

    res.redirect("/submitted")
}