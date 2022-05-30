import React from 'react';

export default function Table({title, data}) {
  const sortOrder = {
    'Easy': 0,
    'Medium': 1,
    'Hard': 2
  }
  const renderRow = data.sort((x, y) => sortOrder[x.difficulty] - sortOrder[y.difficulty]).map(d => {
    return (
      <tr>
        <td>
          <a href={d.LeetCodeLink} target="_blank">
            {d.problemName}
          </a>
        </td>
        <td>{d.difficulty}</td>
        <td>
          {
            d.SolutionLink && 
            <a href={d.SolutionLink} target="_blank">
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
        <table>
          <th>Problem Name</th>
          <th>Difficulty</th>
          <th>Solution Link</th>
          { renderRow }
        </table>
      </>
  );
}