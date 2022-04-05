import  mongoose  from "mongoose";
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
    console.log(newPost)
    
  try {
  await newPost.save()

  res.status(201).json(newPost)
  } catch (error) {
      res.status(409).json({message:error.message})
  }
};

export const updatePosts =async (req, res) => {
  const {id: _id}=req.params
  const post = req.body
 
  if(!mongoose.Types.ObjectId.isValid(_id))
  return res.status(404).send('No Post With That Id')

 const updatePost=await PostMessage.findByIdAndUpdate(_id,post,{new: true})
 res.json(updatePost)

};

export const deletePost =async (req, res) => {
  const {id: _id}=req.params
  
 
  if(!mongoose.Types.ObjectId.isValid(_id))
  return res.status(404).send('No Post With That Id')

 const deletePost=await PostMessage.findByIdAndDelete(_id)
 res.json(deletePost)

};

export const updateLikes =async (req, res) => {
  const {id: _id}=req.params
  const post = await PostMessage.findById(_id)
 
  if(!mongoose.Types.ObjectId.isValid(_id))
  return res.status(404).send('No Post With That Id')

 const updateLikes=await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount+1},{new:true})
 res.json(updateLikes)

};

