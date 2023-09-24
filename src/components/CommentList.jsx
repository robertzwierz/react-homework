import React from "react";

function Comment({ username, commentText }) {
  return (
    <div>
      <p>
        {username} says: {commentText}
      </p>
    </div>
  );
}

function CommentList({ comments }) {
  return (
    <div>
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
}

export default CommentList;
