import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e2948cfac9e64a5ba426e4d3a233587c",
  },
});
