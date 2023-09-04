import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1c3f413f94f60abb1162a3374dbc72756cf517c78bccee80136c2da9225339c7"
  }
});
