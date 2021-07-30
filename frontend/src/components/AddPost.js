import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import actions from "../api";
import "../addpost.css";
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
      <h3
        style={{
          textShadow: `2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3)`,
        }}
      >
        Add Post
      </h3>
      <div class="page">
        <form onSubmit={handleSubmit}>
          <div>
            <label class="field field_v1">
              <input
                class="field__input"
                type="text"
                onChange={handleChange}
                placeholder="club"
              />
              <span class="field__label-wrap">
                <span class="field__label">Club</span>
              </span>
            </label>
          </div>
          <div>
            <label class="field field_v2">
              <input
                class="field__input"
                type="text"
                onChange={handleChange}
                placeholder="year"
              />
              <span class="field__label-wrap">
                <span class="field__label">Year</span>
              </span>
            </label>
          </div>
          <div>
            <label class="field field_v3">
              <input
                class="field__input"
                type="text"
                onChange={handleChange}
                placeholder="player"
              />
              <span class="field__label-wrap">
                <span class="field__label">Player</span>
              </span>
            </label>
          </div>
          <div>
            <label class="field field_v1">
              <input
                class="field__input"
                type="text"
                onChange={handleChange}
                placeholder="league"
              />
              <span class="field__label-wrap">
                <span class="field__label">League</span>
              </span>
            </label>
          </div>
          <div>
            <label class="field field_v1">
              <input
                class="field__input"
                type="text"
                onChange={handleChange}
                placeholder="notes"
              />
              <span class="field__label-wrap">
                <span class="field__label">Notes</span>
              </span>
            </label>
          </div>
          <div>
            <label class="field field_v1">
              <input
                class="field__input"
                type="text"
                onChange={handleChange}
                placeholder="imageUrl"
              />
              <span class="field__label-wrap">
                <span class="field__label">Image URL</span>
              </span>
            </label>
          </div>
          <div className="post-button">
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddPost;

{
  /* <div className="page">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} placeholder="club" />
          <input type="text" onChange={handleChange} placeholder="year" />
          <input type="text" onChange={handleChange} placeholder="player" />
          <input type="text" onChange={handleChange} placeholder="league" />
          <input type="text" onChange={handleChange} placeholder="notes" />
          <input type="text" onChange={handleChange} placeholder="imageUrl" />
          <button>Add</button>
        </form>
      </div> */
}
