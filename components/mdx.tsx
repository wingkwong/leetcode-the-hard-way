import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';
import { TabItem, Tabs } from './tabs';

type SolutionAuthorProps = {
  name: string;
};

type TutorialCreditsProps = {
  authors?: string;
  contributors?: string;
};

type TagsProps = {
  names?: string;
};

type Problem = {
  difficulty: 'Easy' | 'Medium' | 'Hard' | string;
  leetCodeLink: string;
  problemName: string;
  solutionLink?: string;
  tags?: string;
};

type TableProps = {
  collectionLink?: string;
  data: Problem[];
  isSorted?: boolean;
  title: string;
};

function SolutionAuthor({ name }: SolutionAuthorProps) {
  return (
    <div className="solution-author-wrapper">
      <span>Written by {name}</span>
    </div>
  );
}

function TutorialCredits({ authors, contributors }: TutorialCreditsProps) {
  const authorNames = authors ? authors.split(',').map((name) => name.trim()) : [];
  const contributorNames = contributors
    ? contributors.split(',').map((name) => name.trim())
    : [];

  if (authorNames.length === 0 && contributorNames.length === 0) return null;

  return (
    <div className="tutorial-credit-wrapper">
      {authorNames.length > 0 && (
        <CreditGroup
          label={authorNames.length > 1 ? 'Authors: ' : 'Author: '}
          names={authorNames}
        />
      )}
      {contributorNames.length > 0 && (
        <CreditGroup
          label={contributorNames.length > 1 ? 'Contributors: ' : 'Contributor: '}
          names={contributorNames}
        />
      )}
    </div>
  );
}

function CreditGroup({ label, names }: { label: string; names: string[] }) {
  return (
    <div className="tutorial-credit-inner-wrapper">
      <div className="tutorial-credit-wrapper-type">{label}</div>
      <div className="tutorial-credit-wrapper-base">
        {names.map((name) => (
          <span className="tutorial-credit-wrapper-name" key={name}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Tags({ names }: TagsProps) {
  if (!names) return null;

  return (
    <div className="tag-wrapper">
      {names.split(',').map((tag) => {
        const name = tag.trim();

        return (
          <span className="topic-tag" key={name}>
            {name}
          </span>
        );
      })}
    </div>
  );
}

function Table({ title, collectionLink, isSorted = true, data }: TableProps) {
  const hasTopic = data.some((problem) => problem.tags);
  const sortOrder: Record<string, number> = {
    Easy: 0,
    Medium: 1,
    Hard: 2,
  };
  const rows = [...data].sort((left, right) => {
    if (!isSorted) return 0;
    return (sortOrder[left.difficulty] ?? 99) - (sortOrder[right.difficulty] ?? 99);
  });

  return (
    <>
      <h3>{title}</h3>
      {collectionLink && (
        <h4>
          Start Practicing:{' '}
          <a href={collectionLink} rel="noreferrer" target="_blank">
            {collectionLink}
          </a>
        </h4>
      )}
      <table className="suggested-problem-table">
        <thead>
          <tr>
            <th>Problem Name</th>
            <th>Difficulty</th>
            <th>Solution Link</th>
            {hasTopic && <th>Topic</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((problem) => (
            <tr key={`${problem.problemName}-${problem.leetCodeLink}`}>
              <td>
                <a href={problem.leetCodeLink} rel="noreferrer" target="_blank">
                  {problem.problemName}
                </a>
              </td>
              <td className={problem.difficulty.toLowerCase()}>{problem.difficulty}</td>
              <td style={{ textAlign: 'center' }}>
                {problem.solutionLink ? (
                  <a href={normalizeSolutionLink(problem)}>View Solutions</a>
                ) : (
                  <span>N/A</span>
                )}
              </td>
              {hasTopic && (
                <td>
                  <Tags names={problem.tags} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function normalizeSolutionLink(problem: Problem) {
  const link = problem.solutionLink;

  if (!link || /^https?:\/\//.test(link)) return link;

  const parts = link.split('/').filter(Boolean);
  const solutionsIndex = parts.indexOf('solutions');
  if (solutionsIndex === -1) return link;

  const range = parts[solutionsIndex + 1];
  const slug = parts[solutionsIndex + 2];
  if (!range || !slug) return link;

  const normalizedSlug = slug.startsWith(`${range}/`) ? slug.slice(range.length + 1) : slug;
  const hasNumericPrefix = /^\d{4}-/.test(normalizedSlug);
  const problemId = problem.problemName.match(/^\s*(\d{1,4})\b/)?.[1];
  const finalSlug =
    hasNumericPrefix || !problemId
      ? normalizedSlug
      : `${problemId.padStart(4, '0')}-${normalizedSlug}`;

  return `/solutions/${range}/${finalSlug}`;
}

export function getMDXComponents(
  components?: MDXComponents,
): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tabs,
    TabItem,
    SolutionAuthor,
    TutorialCredits,
    Table,
    Tags,
    ...components,
  };
}

export function getRelativeMDXComponents(source: unknown, page: unknown) {
  return getMDXComponents({
    a: createRelativeLink(source as never, page as never),
  });
}

export type MDXComponent = (props: {
  components?: MDXComponents;
}) => ReactNode;
