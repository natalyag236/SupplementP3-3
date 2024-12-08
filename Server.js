const express = require('express');
const app = express();
/**
 * Route handler for the root URL ('/').
 * Responds with a 'hello world' message.
 */
app.get('/', (req, res) => {
    res.send('hello world');
});

const port = 5000;
/**
 * Start the server and listen on the specified port.
 * Logs a message to the console when the server is running.
 */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;  
