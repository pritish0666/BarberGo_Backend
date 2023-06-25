import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// app.use(cors());

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-dohaqla-shard-00-00.psuhtpb.mongodb.net:27017,ac-dohaqla-shard-00-01.psuhtpb.mongodb.net:27017,ac-dohaqla-shard-00-02.psuhtpb.mongodb.net:27017/?ssl=true&replicaSet=atlas-pd8u9b-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to DB"))
  .catch((err) => console.error(err));

const slotSchema = new mongoose.Schema({
  time: String,
  available: Boolean,
});

export const Slot = mongoose.model("Slot", slotSchema);

const salonSchema = new mongoose.Schema({
  name: {
    type: String,

    required: true,
  },
});
export const MyData = mongoose.model("MyData", salonSchema);
