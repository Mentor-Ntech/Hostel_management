const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    require: true,
  },
  roomCapacity: {
    type: Number,
    require: true,
  },

  roomOccupancy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],

  roomLocation: {
    type: String,
    require: true,
  },

  roomStatus: {
    type: String,
    default: "unAvailable",
  },
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
