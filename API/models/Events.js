const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  img: { type: String},
  date: { type: String},
  desc: { type: String},
  price: { type: Number},
  location: { type: String},
  eventType: { type: String },
  timetable: { type: Array },
  others: { type: Array },
  ticket: { type: String },
  video: { type: String },
  overview: { type: String },
  reminder:{type:Array},
});

module.exports=mongoose.model("Event",EventSchema)
