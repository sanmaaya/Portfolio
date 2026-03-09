const router = require("express").Router();
const Message = require("../models/Message");

// Post a contact message
router.post("/", async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        await newMessage.save();
        res.status(201).json({ message: "Message Sent Successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
