import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <span>{count} likes</span>
    </div>
  );
}

export default LikeButton;
