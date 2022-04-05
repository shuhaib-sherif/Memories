import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/posts.js";
const app = express();

app.use(bodyParser.json({ limit: "300mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());
app.use('/posts',router)
const CONNECTION_URL =
  "mongodb+srv://shuhaib:shuhaib@cluster0.4k09x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
const PORT = process.env.port || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
  )
  .catch((e) => console.log(e.message));
