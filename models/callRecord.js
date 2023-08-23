import mongoose from "mongoose";

const callRecordSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    startTime: { type: String, required: true },
    callType: { type: String },
  });
  
module.exports = mongoose.model('CallRecord', callRecordSchema);
