nodejsgmail
===========

nodejs and gmail

# installation

`npm install`

# environment variables

Not actually used, but identifies the application:

`APP_NAME=nodejsgmail-2015`

The gmail account that authenticates:

`EMAIL=<email_address@gmail.com>`

Application OAuth client id:

`CLIENT_ID=<id_abc.apps.googleusercontent.com>`

Application OAuth client secret:

`CLIENT_SECRET=<secret>`

You have to do the OAuth dance once to get this:

`REFRESH_TOKEN=<#/secret>`

Where you want to send mail:

`RECIPIENT=<email_address@anywhere>`

If you put these in a `.env` file then node-foreman will set them for you
automatically.

# usage

To count the messages in your mailbox:

`$(npm bin)/nf start imap`

To just send mail:

`$(npm bin)/nf start smtp`

To just print out an OAuth token:

`$(npm bin)/nf start token`

# resources

https://www.npmjs.com/package/imap

https://github.com/andris9/xoauth2

https://github.com/andris9/nodemailer-smtp-transport#authentication

https://www.npmjs.com/package/foreman
