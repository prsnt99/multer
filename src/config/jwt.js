import jwt from "jsonwebtoken";

 const jsonwebtoken = (data) => {
  return jwt.sign({ _id: data._id, email: data.email }, "secret", {
    expiresIn: "24h",
  });
};

export default jsonwebtoken      
