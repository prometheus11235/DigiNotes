const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'cdHL4yi1nYPYASRXfXZ11wX9yfH3wF4G',
  issuerBaseURL: 'https://dev-jor1d1ja1ob8l7be.us.auth0.com'
};

app.use(express.static('public'));

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated checks if the user is authenticated
app.get('/auth', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// This function requires the user to be logged in to access
app.get('/notes', requiresAuth());


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/FRONTEND/home.html');
})

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/FRONTEND/notes.html');
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/connect', db.checkConnection)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})