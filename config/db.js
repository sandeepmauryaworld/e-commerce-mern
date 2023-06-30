import mongoose from "mongoose";
import Colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDb Database ${conn.connection.host}`.bgGreen.red
    );
  } catch (error) {
    console.log(`error in mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
