var Imap = require('imap'),
    inspect = require('util').inspect;

var xoauth2 = require("xoauth2"),
    xoauth2gen;

xoauth2gen = xoauth2.createXOAuth2Generator({
  user: process.env.EMAIL,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});

xoauth2gen.getToken(function(err, token) {
  if(err){
    return console.log(err);
  }
  var imap = new Imap({
	  //    debug: console.log,
    xoauth2: token,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    keepAlive: false
  });

  function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }

  imap.once('ready', function() {
    openInbox(function(err, box) {
      if (err) throw err;
      console.log(box.messages);
      imap.end();
    });
  });

  imap.once('error', function(err) {
    console.log(err);
  });

  imap.once('end', function() {
    console.log('Connection ended');
  });

  //  console.log(imap['_config']);
  imap.connect();
});
