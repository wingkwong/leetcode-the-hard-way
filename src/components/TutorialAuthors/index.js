import React from 'react';

export default function TutorialAuthors({names}) {
  const authors = names.split(",");
  return (
    <div className="tutorial-author-wrapper">
      This tutorial is written by
      { 
        authors.map((author, idx) => {
          return (<span key={idx} className="author-tag">{ author }</span>);
        })
      }
    </div>
  )};