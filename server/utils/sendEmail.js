const nodemailer = require('nodemailer');

const sendEmail = async (recipient) => {
    try {
        var transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            auth: {
              user: "user",
              pass: "password"
            },
            tls: {
              ciphers: "SSLv3",
            },
            requireTLS: true
          });

          const mailOptions = {
            from: '"Example Team" <from@example.com>',
            to: recipient,
            subject: 'Nice Nodemailer test',
            text: 'Hey there, it’s our first message sent with Nodemailer 😉 ',
            html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
        };

        await transporter.sendMail(mailOptions);

        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = sendEmail;