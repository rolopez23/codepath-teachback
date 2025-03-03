import React, { useState } from "react";

const PostWithComments = ({ review }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setComment] = useState("");

  const addComment = () => {
    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <div>
      <h2>Post</h2>
      {/* Display the post content */}
      <p>{review}</p>
      <h3>Comments</h3>
      {/* Display the comments */}
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      {/* Form to add a new comment */}
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={addComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default PostWithComments;
