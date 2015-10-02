var nodemailer = require('nodemailer');
var generator = require('xoauth2').createXOAuth2Generator({
    user: process.env.EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
});

// listen for token updates
// you probably want to store these to a db
generator.on('token', function(token){
  console.log('New token for %s: %s', token.user, token.accessToken);
});

// login
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      xoauth2: generator
    }
});

var mailOptions = {
  from: process.env.EMAIL,
  to: process.env.RECIPIENT,
  subject: Date.now(),
  text: 'Authenticated with OAuth2'
};

// send mail
transporter.sendMail(mailOptions, function(error, info){
  if(error) {
    console.log(error);
  }else{
    console.log('Message sent:' + info.response);
  }
});
