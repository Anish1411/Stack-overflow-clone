import mongoose from "mongoose";
const uri = "mongodb+srv://kirodiwalanish11:<nvCEsEBP66zJHKyn>@cluster0.vrgvu3x.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
