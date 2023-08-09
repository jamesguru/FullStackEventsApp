const express = require("express");
const router = express.Router();
const Event = require("../models/Events");

// CREATE AN EVENT

router.post("/", async (req, res) => {
  const newEvent = Event(req.body);

  try {
    const Event = await newEvent.save();
    res.status(201).json("Event has been saved successfully");
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

// GET EVENTS

router.get("/", async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

// DELETE EVENT

router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(201).json("Event has been deleted successfully");
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

// SET REMINDER

router.put("/reminder/:id", async (req, res) => {
  const { name, email } = req.body;

  try {
    if (email) {
      const reminder = await Event.findByIdAndUpdate(
        req.params.id,
        {
          $push: { reminder: { name, email } },
        },
        { new: true }
      );
    }
    res.status(201).json("reminder has been added successfully");
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

module.exports = router;
