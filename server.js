const express = require('express');
const app = express();
const port = 3000;

let shipments = {}; // In-memory store for shipments

// Middleware to parse JSON
app.use(express.json());

// Endpoint to generate and add a new shipment
app.post('/create-shipment', (req, res) => {
    const trackingID = generateTrackingID();
    shipments[trackingID] = req.body; // Store shipment details
    res.json({ trackingID });
});

// Endpoint to get shipment details by tracking ID
app.get('/track/:trackingID', (req, res) => {
    const { trackingID } = req.params;
    const shipment = shipments[trackingID];
    if (shipment) {
        res.json(shipment);
    } else {
        res.status(404).json({ error: 'Tracking ID not found' });
    }
});

function generateTrackingID() {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 10000);
    return `TRACK-${timestamp}-${randomNumber}`;
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
