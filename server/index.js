require('dotenv').config()
const express = require ('express')
const bodyParser = require ('body-parser')
const massive = require ('massive')
const sessions = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const ctrl = require('./controller')


const app = express();
app.use(bodyParser.json())

app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// app.use(express.static(`${__dirname}/build`));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database is connected')

    app.listen(SERVER_PORT, () => {
       console.log(`Someone is listening on port ${SERVER_PORT}`)
    })
})

//authentication
app.post("/auth/register", ctrl.register)
app.post("/auth/login", ctrl.login)


app.get(`/api/user-post`, ctrl.getUserPosts)
