var Imap = require('imap'),
    inspect = require('util').inspect;

var imap = new Imap({
  //  debug: console.log,
  user: process.env.USER,
  password: process.env.PASSWORD,
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

imap.connect();
