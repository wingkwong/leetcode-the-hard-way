import React from 'react';

export default function Authors({names}) {
  const authors = names.split(",");
  return (
    <div className="author-wrapper">
      {
        authors.length > 1 ? "Authors" : "Author"
      }
      :
      { 
        authors.map((author, idx) => {
          return (<span key={idx} className="author-tag">{ author}</span>);
        })
      }
    </div>
  )};