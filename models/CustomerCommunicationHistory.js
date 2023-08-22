import mongoose from 'mongoose';

const customerCommunicationHistorySchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    timestamp: { type: String, required: true },
    id: { type: String, required: true },
    type: { type: String, required: true },
    domain: { type: String, required: true },
    direction: { type: String, required: true },
    from_num: { type: String, required: true },
    text: { type: String, required: true },
    fromName: { type: String, required: true },
    department: { type: String },
    toName: { type: String },
    chatGPTSummary: { type: String },
    toDepartment: { type: String },
    fromDepartment: { type: String },
  });
  
  export default mongoose.model('CustomerCommunicationHistory', customerCommunicationHistorySchema);
  