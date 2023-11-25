const express = require('express');
const webpush = require('web-push')
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.json())

const publicVapidKey = 'BLQyvELBwWOaIUVWD3ud1IeTFqp-3p4ux1tTaX021fGfbAWQo94Pp-8zlDgl7V_mOyR0_ME3hKBRzA-CHGiIT5I'

const privateVapidKey = 'x9BHY8rQzp0KFP4W1xJ6LvLOjOQF-PGs3P9Z8kBHVlw'

webpush.setVapidDetails('mailto.test@test.com', publicVapidKey, privateVapidKey)

// Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get push subscription object
    const subscription = req.body;

    // send 201 - resource created
    res.status(201.).json({});

    // Create Payload
    const payload = JSON.stringify({ title: 'Push Test '})

    // Pass object into sendNotification:
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
})

const port = 5000;
 
app.listen(port, () => console.log(`Server started on port ${port}`));

