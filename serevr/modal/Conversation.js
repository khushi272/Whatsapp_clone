import mongoose from "mongoose";

const newConverastion = new mongoose.Schema(
  {
    member: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const conversation = mongoose.model('Converastion',newConverastion);
export default conversation;