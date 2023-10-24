import conversation from "../modal/Conversation.js";

export const newConverastion = async (request, response) => {
  try {
   let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;
    const exists = await conversation.findOne({
        member: { $all: [receiverId, senderId] },
      });
    if (exists) {
      return response.status(200).json("conversation already exits");
    }
    const newconversation = new conversation({
      member: [senderId,receiverId],
    });
    await newconversation.save();
    return response.status(200).json("conversation saved successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};


export const getConverastuion = async(request,response) =>{
try{
  let senderId = request.body.senderId;
  let receiverId = request.body.receiverId;
  let converastion = await conversation.findOne({
    member: { $all: [receiverId, senderId] },
  });
  return response.status(200).json(converastion)
}catch(error){
  return response.status(500).json(error.message)
}
}
