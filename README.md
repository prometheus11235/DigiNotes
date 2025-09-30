https://github.com/user-attachments/assets/8cae52f1-3379-4731-90b4-c485c4c5dd04
# DigiNotes

# Summary:

DigiNotes is a simple web application highlighting basic CRUD functionalities through rest API calls with Node and Express to a Postgresql database. Through rest API calls, DigiNotes creates, modifies, deletes, and reads user data from a Postgresql database called API. Additionally, a 3rd party authenticator, Auth0, was utilized to force users to authenticate themselves before viewing or modifying data in the Postgresql database. Vanilla JavaScript and CSS was executed to avoid security concerns regarding vulnerabilities in React and other 3rd party front end packages. 

# Disclaimer:

The driving goal of this web application was to give me a refresher on JavaScript by building a web application in 48 hours. DigiNotes was never intended to be staged in a production environment. If it were to be staged in a production environment, then more proactive security steps would have been made. Conversely, the Postgresql database was locally hosted on my Linux computer and it was not published to a DevOps environment like AWS. ChatGPT and GitHub Copilot were employed to practice development with a modern AI stack. 

# Application Assets and Functions:

Index.js
- Launches Node.js framework to localhost:3000.
- Configures authentication to Auth0.
- Establishes routes to API calls and protects the calls through Auth0.
- Creates routes to frontend assets.

Queries.js
- Connects to Postgresql database api.
- Produces Rest API calls through SQL queries.
- Exports the modules to Index.js.

Home.html
- Allows users to log into an Auth0 account.
- Redirects to the Auth0 log in and notes.html.

Notes.html
- Vanilla JavaScript and CSS are applied to create custom user interfaces.
- Rest API calls are made through the user interface to create, read, update and delete text data in the Postgresql database.

# Citations:

This project was inspired by the following blogs: 

CRUD REST API with Node.js, Express, and PostgreSQL. 
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/?utm_source=chatgpt.com

Auth0 Express SDK Quickstart: Add Login to your Express Application
https://auth0.com/docs/quickstart/webapp/express/interactive
