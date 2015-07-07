# Express Middleware Practice

Your challenge is to make it so that a users can never make it to a page that has this error message:

![](wireframes/error-message.png)

Or this error message:

![](wireframes/error-message-2.png)

## Activities

- Draw a site map
- Explain the difference between these lines:

  ```js
  app.use('/', auth);
  app.use('/users', users);
  ```
- Protect all articles and products routes using application-level middleware in `app.js`
- Protect the users index page to only allow logged-in users (route-level middleware in `routes/users.js`)
- Protect the users show and edit page to only allow logged-in users who match the url (route-level middleware in `routes/users.js`).  Use the _same_ function to do this.
- Make sure that user profiles remain public
