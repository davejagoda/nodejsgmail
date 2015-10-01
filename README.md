nodejsgmail
===========

nodejs and gmail

# environment variables

```
APP_NAME=nodejsgmail-2015
EMAIL=<email_address@gmail.com>
CLIENT_ID=<id_abc.apps.googleusercontent.com>
CLIENT_SECRET=<secret>
REFRESH_TOKEN=<#/secret>
```

If you put these in a `.env` file then foreman will set them for you
automatically.

# start instructions

```
foreman start
```
or to just print out the OAuth token:
```
foreman start -f Procfile.token
```

# resources

https://www.npmjs.com/package/imap
https://github.com/andris9/xoauth2
http://ddollar.github.io/foreman/
