import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0f16269108d14c5d919d6ae073dd2107",
  },
});
