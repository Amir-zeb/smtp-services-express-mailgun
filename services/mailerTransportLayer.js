// services/mailerTransportLayer.js
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

// Create a transporter using the SMTP details
const mailGunTransporter = mailgun.client({
    key: process.env.MAILGUN_API_KEY,
    username: "api"
});

module.exports = { mailGunTransporter };