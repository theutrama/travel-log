const { Router } = require("express");

const LogEntry = require("../models/LogEntry");

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Hellooo",
    });
});

router.post("/", async (req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body);
        console.log("1");
        console.log(req.body);
        const createdEntry = await logEntry.save();
        console.log("2");
        res.json(createdEntry);
    } catch (error) {
        if(error.name === "ValidationError"){
            res.status(422);
            console.log("3");
        }
        next(error);
    }
});

module.exports = router;