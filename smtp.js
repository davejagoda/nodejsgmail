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
var transporter = nodemailer.createTransport(({
    service: 'gmail',
    auth: {
      xoauth2: generator
    }
}));

// send mail
transporter.sendMail({
  from: process.env.EMAIL,
  to: process.env.RECIPIENT,
  subject: 'hello world!',
  text: 'Authenticated with OAuth2'
});
