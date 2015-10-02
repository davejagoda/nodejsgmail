nodejsgmail
===========

nodejs and gmail

# environment variables

`APP_NAME=nodejsgmail-2015` not actually used, but identifies the application
`EMAIL=<email_address@gmail.com>` the gmail account that authenticates
`CLIENT_ID=<id_abc.apps.googleusercontent.com>` application OAuth client id
`CLIENT_SECRET=<secret>` application OAuth client secret
`REFRESH_TOKEN=<#/secret>` you have to do the OAuth dance once to get this
`RECIPIENT=<email_address@anywhere>` where you want to send mail

If you put these in a `.env` file then foreman will set them for you
automatically.

# start instructions

`foreman start`

or to just print out the OAuth token:

`foreman start -f Procfile.token`

or to just send mail:

`foreman start -f Procfile.smtp`

# resources

https://www.npmjs.com/package/imap
https://github.com/andris9/xoauth2
http://ddollar.github.io/foreman/
