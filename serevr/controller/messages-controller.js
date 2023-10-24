import conversation from "../modal/Conversation.js";
import message from "../modal/Messages.js";

export const newMessage = async (request, response) => {
  try {
    const newmessage = new message(request.body);
    await newmessage.save();
    await conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    return response.status(200).json("Message has been send successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getMessage = async (request, response) => {
  try {
    const Message = await message.find({ conversationId: request.params.id });
    return response.status(200).json(Message);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
