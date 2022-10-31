import React from 'react';

export default function Contributors({names}) {
    const contributors = names.split(",");
    return (
      <div className="tutorial-tag-wrapper contributors">
        { contributors.length > 1 ? "Contributors: " : "Contributor: "}
        { 
          contributors.map((contributor, idx) => {
            return (<span key={idx} className="contributor-tag tag">{ contributor }</span>);
          })
        }
      </div>
    )};