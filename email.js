var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pritamdell8084@gmail.com',
        pass: 'zqhjuixagrxznbcr'
    }
});

var mailOptions = {
    from: 'pritamdell8084@gmail.com',
    to: 'accerpt@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

// console.log(transporter);

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});