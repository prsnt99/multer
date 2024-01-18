import mongoose from "mongoose";

const mongoDb = async () => {
  try {
    await mongoose
      .connect(process.env.URI)
      .then(() => console.log("Connected.."))
      .catch((error) => console.log("Disconnected...",error));
  } catch (err) {
    console.log(err,"Error")
  }
};
export default mongoDb;
