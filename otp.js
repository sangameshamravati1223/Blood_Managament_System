// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const twilio = require('twilio');

// // const app = express();
// // const port = 3000;

// // // Twilio credentials 
// // const client = twilio(,process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// // // Generate OTP
// // function generateOTP() {
// //     return Math.floor(100000 + Math.random() * 900000).toString();
// // }

// // // Send OTP via SMS
// // app.post('/sendotp', (req, res) => {
// //     const phoneNumber = 9353143128;

// //     // if (!phoneNumber) {
// //     //     return res.status(400).send('Phone number is required');
// //     // }

// //     const otp = generateOTP();

// //     client.messages
// //         .create({
// //             body: `Your OTP is: ${otp}`,
// //             from: 9353143128,
// //             to: phoneNumber
// //         })
// //         .then(message => {
// //             console.log(`OTP sent successfully to ${phoneNumber}: ${message.sid}`);
// //             res.send('OTP sent successfully');
// //         })
// //         .catch(err => {
// //             console.error('Error sending OTP:', err);
// //             res.status(500).send('Error sending OTP');
// //         });
// // });

// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')('sangamesh','Iamthegreatest@123','AC'+accountSid, authToken);

// client.messages
//       .create({ from: '+919353143128', body: 'Ahoy, world!', to: '+9353143128' })
//       .then(message => console.log(message.sid));

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+9353143128',
//      to: '+8088177808'
//    })
//   .then(message => console.log(message.sid));


require('dotenv').config();
const { insertData , getData } = require('./db.js');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.post('/send-otp', async (req, res) => {
  // try {
    checkLoginForm(req.body)
    const otp = Math.floor(100000 + Math.random() * 900000);
    
    res.status(200).json({ success: true, message: 'OTP sent successfully!' });
  //   const response = await axios.get('https://www.fast2sms.com/dev/bulk', {
  //     params: {
  //       authorization: process.env.FAST2SMS_API_KEY,
  //       variables_values: `Your OTP is ${otp}`,
  //       route: 'otp',
  //       numbers: mobileNumber
  //     }
  //   });
  //   res.status(200).json({ success: true, message: 'OTP sent successfully!' });
  // } catch (error) {
  //   res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  // }
    
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function checkLoginForm(loginData){
  getData(loginData).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log("err",err)
    return false;
  })
  // if(loginData.mobile === '' && loginData.password === ''){
  //   return true;
  // }
  // else return false;
}