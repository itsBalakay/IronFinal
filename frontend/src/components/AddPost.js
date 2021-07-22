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
    console.log(post);
    let res = await actions.addPost(post);
    history.push("/favourites"); //props.history.push is also an option
  };

  return (
    <div>
      <h3>Add Post</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="club" />
        <input type="text" onChange={handleChange} placeholder="year" />
        <input type="text" onChange={handleChange} placeholder="player" />
        <input type="text" onChange={handleChange} placeholder="league" />
        <input type="text" onChange={handleChange} placeholder="notes" />
        <input type="text" onChange={handleChange} placeholder="imageUrl" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddPost;
