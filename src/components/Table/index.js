import React from 'react';

export default function Table({title, collectionLink, isSorted = true, data}) {
  const sortOrder = {
    'Easy': 0,
    'Medium': 1,
    'Hard': 2
  }
  const renderRow = (isSorted ? data.sort((x, y) => sortOrder[x.difficulty] - sortOrder[y.difficulty]) : data).map(d => {
    return (
      <tr>
        <td>
          <a href={d.leetCodeLink} target="_blank">
            {d.problemName}
          </a>
        </td>
        <td>{d.difficulty}</td>
        <td>
          {
            d.solutionLink && 
            <a href={d.solutionLink} target="_blank">
              View Solutions
            </a>
          }
        </td>
      </tr>
    )
  })

  return (
      <>
        <h3>{title}</h3>
        {
          collectionLink && <h4>Start Practicing: <a href={collectionLink} target="_blank">{collectionLink}</a></h4>
        }
        <table>
          <th>Problem Name</th>
          <th>Difficulty</th>
          <th>Solution Link</th>
          { renderRow }
        </table>
      </>
  );
}