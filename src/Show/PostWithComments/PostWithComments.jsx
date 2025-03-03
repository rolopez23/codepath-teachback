import React from "react";

const PostWithComments = ({ review }) => {

  const comments = []

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
        />
        <button onClick={()=>{console.log('This should add a comment')}}>Add Comment</button>
      </div>
    </div>
  );
};

export default PostWithComments;
