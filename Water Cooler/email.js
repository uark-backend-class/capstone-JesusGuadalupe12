const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user:"a8b1d64732a95f",
        pass: "26b03954ef65ac"
    }
});

exports.send = (to) => {
    return transport.sendMail({
        to,
        html: '<h1>Thanks again for contributing to this great debate! Click <a href="http://localhost:3000/results">here</a> to see what others think!</h1>',
        subject: "The Results Are In!",
        from: "results@pineappledebate.com",
    });
}
