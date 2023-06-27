import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';

const PORT = 5000;
const URL = "mongodb+srv://user:user@cluster0.ul2p0ce.mongodb.net/";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/streamers", router);

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

connectDB().then(startApp());
