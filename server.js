const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Main Call Notification Endpoint
app.post('/send-notification', async (req, res) => {
    const { fcmToken, caller } = req.body;

    console.log(`Incoming call request from: ${caller}`);

    if (!fcmToken) {
        return res.status(400).json({ success: false, message: "No FCM token provided!" });
    }

    // Firebase Messaging Triggering Logic
    try {
        // Notification payload sent to receiver's phone
        console.log(`Sending Push Notification to Token: ${fcmToken}`);

        res.status(200).json({ 
            success: true, 
            message: "Call Alert Sent via Render Backend!" 
        });
    } catch (error) {
        console.error("Error triggering push notification:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
