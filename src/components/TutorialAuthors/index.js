import React from 'react';

export default function TutorialAuthors({names}) {
  const authors = names.split(",");
  return (
    <div className="tutorial-tag-wrapper">
      { authors.length > 1 ? "Authors: " : "Author: "}
      { 
        authors.map((author, idx) => {
          return (<span key={idx} className="author-tag tag">{ author }</span>);
        })
      }
    </div>
  )};