import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import actions from "../api";
function AddPost(props) {
  let [post, setPost] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    let newPost = { ...post };
    newPost[e.target.placeholder] = e.target.value;
    setPost(newPost);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await actions.addPost({ post });
    history.push("/favourites"); //props.history.push is also an option
  };

  return (
    <div>
      <h3>Add Post</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Club" />
        <input type="text" onChange={handleChange} placeholder="Year" />
        <input type="text" onChange={handleChange} placeholder="Player" />
        <input type="text" onChange={handleChange} placeholder="League" />
        <input type="text" onChange={handleChange} placeholder="Notes" />
        <input type="text" onChange={handleChange} placeholder="ImageUrl" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddPost;
