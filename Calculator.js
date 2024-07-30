const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));

// Request to HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html,");
    
});

app.post("/calculator", (req, res) => {
    let { n1, n2, operation } = req.body;
    
    // Convert string inputs to numbers parse float
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let result;

    // calculation process
    switch (operation) {
        case 'add':
            result = n1 + n2;
            break;
        case 'subtract':
            result = n1 - n2;
            break;
        case 'multiply':
            result = n1 * n2;
            break;
        case 'divide':
            if (n2 === 0) {
                return res.send('Error: Cannot divide by zero.');
            }
            result = n1 / n2;
            break;
        default:
            return res.send('Error: Invalid operation.');
    }

    res.send(`The result of ${operation} is: ${result}`);
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
