/**WHERE WE DO ALL OF OUR BACKEND CONNECTIONS */
import axios from "axios";
console.log(process.env);
const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://retro-shirts.herokuapp.com/api"
    : `http://localhost:5000/api`;
console.log(serverUrl);
const createHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
};
const actions = {
  getUser: async () => {
    return await axios.get(`${serverUrl}/get-the-user`, createHeaders());
  },
  addPost: async (post) => {
    console.log(post);
    let res = await axios.post(`${serverUrl}/add-post`, post, createHeaders());
    return res;
  },
  addFeedback: async (feedback) => {
    console.log(feedback);
    let res = await axios.feedback(
      `${serverUrl}/add-feedback`,
      feedback,
      createHeaders()
    );
    return res;
  },
  getAllPosts: async (post) => {
    return await axios.get(`${serverUrl}/all-the-posts`, createHeaders());
  },

  addCart: async (shirt) => {
    let res = await axios.post(
      `${serverUrl}/add-to-cart`,
      shirt,
      createHeaders()
    );
    return res;
  },

  getCart: async (shirt) => {
    return await axios.get(`${serverUrl}/get-cart`, createHeaders());
  },

  deleteItem: async (item) => {
    return await axios.delete(
      `${serverUrl}/delete-cart-item?id=${item._id}`,
      createHeaders()
    );
  },

  stripePay: async (data) => {
    let res = await axios.post(`${serverUrl}/payment`, data, createHeaders());
    return res;
  },

  shirts: async () => {
    return await axios.get(`${serverUrl}/all-the-shirts`, createHeaders());
  },

  //maybe fix
  oneShirt: async (shirtid) => {
    return await axios.get(`${serverUrl}/one-shirt/${shirtid}`, createHeaders);
  },

  authenticate: async (profileObj) => {
    console.log(profileObj, "profileObj");
    let res = await axios.post(
      `${serverUrl}/authenticate`,
      profileObj,
      createHeaders()
    );
    console.log(res);
    localStorage.setItem("token", res.data.token);
    return res;
  },
};
export default actions;
