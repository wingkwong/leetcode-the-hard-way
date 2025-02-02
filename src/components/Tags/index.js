import React from 'react';

export default function Tags({ names }) {
  if (!names) return null;
  const tags = names.split(',');
  return (
    <div className="tag-wrapper">
      {tags.map((tag, idx) => {
        return (
          <span key={idx} className="topic-tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
}
