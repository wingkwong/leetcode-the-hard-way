import React from 'react';

export default function TutorialCredits({ authors, contributors }) {
  const authorNames = authors ? authors.split(',') : authors;
  const contributorNames = contributors
    ? contributors.split(',')
    : contributors;
  return (
    <div className="tutorial-credit-wrapper">
      <div className="tutorial-credit-inner-wrapper">
        <div className="tutorial-credit-wrapper-type">
          {authorNames.length > 1 ? 'Authors: ' : 'Author: '}
        </div>
        <div className="tutorial-credit-wrapper-base">
          {authorNames.map((author) => {
            return (
              <span className="tutorial-credit-wrapper-name">{author}</span>
            );
          })}
        </div>
      </div>
      {contributorNames && (
        <div className="tutorial-credit-inner-wrapper">
          <div className="tutorial-credit-wrapper-type">
            {contributorNames.length > 1 ? 'Contributors: ' : 'Contributor: '}
          </div>
          <div className="tutorial-credit-wrapper-base">
            {contributorNames.map((contributor) => {
              return (
                <span className="tutorial-credit-wrapper-name">
                  {contributor}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
