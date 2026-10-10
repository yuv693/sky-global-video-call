const express = require('express');
const app = express();

app.use(express.json());

app.post('/send-notification', (req, res) => {
    console.log("Call notification received:", req.body);
    res.status(200).json({ success: true, message: "Notification sent!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
