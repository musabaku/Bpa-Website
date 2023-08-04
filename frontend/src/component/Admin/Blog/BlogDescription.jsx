import React, { useState } from "react";

const BlogDescription = ({ description }) => {
  const previewLength = 30;
  const [showMore, setShowMore] = useState(false);

  // Check if the description is available, if not, display a message
  if (!description) {
    return <p>Description not available.</p>;
  }

  return (
    <div>
      {showMore ? (
        <p>{description}</p>
      ) : (
        <p>{description.slice(0, previewLength)}...</p>
      )}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default BlogDescription;
