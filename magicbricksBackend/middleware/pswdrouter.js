const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
 service:'gmail',
  auth: {
      user: '@anikethani123456789@gmail.com',
      pass: 'vvxl jqrf pqtz ubkc'
  }
});

router.post('/reset', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6 digit OTP
  const mailOptions = {
    from: 'anikethani123456789@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `Your OTP for password reset is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.status(200).send('OTP sent to your email.');
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).send('Failed to send OTP.');
  }
});

module.exports = router;