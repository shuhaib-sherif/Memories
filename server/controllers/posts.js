import PostMessage from "../model/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postmessages = await PostMessage.find();
    res.status(200).json(postmessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts =async (req, res) => {
    const data= req.body
    const newPost= new PostMessage(data)
  try {
  await newPost.save()

  res.status(201).json(newPost)
  } catch (error) {
      res.status(409).json({message:error.message})
  }
};
