import bcrypt from "bcryptjs";
import jsonwebtoken from "../config/jwt.js";
import UserModel from "../model/user.js";

class AuthController {
  signup = async (req, res) => {
    try {
      let { email, name, password } = req.body;

      let userExist = await UserModel.findOne({ email: email });

      if (userExist) {
        return res.status(403).json({ message: "User is already exist" });
      }

      let hashPassword = bcrypt.hashSync(password, 8);

      let doc = await UserModel.create({
        email: email,
        name: name,
        password: hashPassword,
      });
      let token = jsonwebtoken(doc);

      if (doc) {
        return res.status(200).json({
          data: doc,
          token: token,
          message: "User Register Successfully",
        });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ message: "An Internal Server Error", error: err });
    }
  };

  signIn = async (req, res) => {
    try {  
      let { email, password } = req.body;

      let doc = await UserModel.findOne({ email: email });

      if (doc) {
        let hashPassword = bcrypt.compareSync(password, doc.password);
        if (!hashPassword) {
          return res.status(400).json({ message: "Incorrect password" });
        } else {
          let token = jsonwebtoken(doc);
          return res
            .status(200)
            .json({ data: doc, token: token, message: "Login successfully" });
        }
      } else {
        return res.status(400).json({ message: "User not found" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An Internal Server Error", erorr: error });
    }
  };
}

export default new AuthController();
