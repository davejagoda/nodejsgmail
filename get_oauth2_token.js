var xoauth2 = require("xoauth2"),
    xoauth2gen;

xoauth2gen = xoauth2.createXOAuth2Generator({
  user: process.env.EMAIL,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});

// SMTP/IMAP
xoauth2gen.getToken(function(err, token){
  if(err){
    return console.log(err);
  }
  console.log("AUTH XOAUTH2 " + token);
});
