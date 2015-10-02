nodejsgmail
===========

nodejs and gmail

# environment variables

Not actually used, but identifies the application:

`APP_NAME=nodejsgmail-2015`

Tthe gmail account that authenticates:

`EMAIL=<email_address@gmail.com>`

Application OAuth client id:

`CLIENT_ID=<id_abc.apps.googleusercontent.com>`

Application OAuth client secret:

`CLIENT_SECRET=<secret>`

You have to do the OAuth dance once to get this:

`REFRESH_TOKEN=<#/secret>`

Where you want to send mail:

`RECIPIENT=<email_address@anywhere>`

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
