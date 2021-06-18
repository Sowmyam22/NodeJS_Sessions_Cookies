## Mandatory packages to install

npm install --save-dev nodemon

npm install --save express body-parser ejs mysql2 sequelize express-session


## Cookies

1. Great for storing data on the client (browser);
2. Do not store the sensitive data here (It can be viewed and manipulated).
3. Cookies can be configured to expire when the browser is closed.
4. Worked well together with the sessions.


## Sessions

1. Stored on the server.
2. Great for storing sensitive data that should survive accross the requests.
3. You can store anything in the session (Storing user data, Authentication status,...).
4. Identified via cookie.
5. You can use different storages for saving your sessions on the server.
