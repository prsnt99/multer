import axios from "axios";
import development from "../../constant";

const API_URL = development.API_URL_AUTH;

const signUp = async (data) => {
  const response = await axios.post(API_URL + "signup", {
    name: data.name,
    email: data.email,
    password: data.password,
  });

  if (response.status == 200) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
};

const authService = {
  signUp,
};

export default authService;
