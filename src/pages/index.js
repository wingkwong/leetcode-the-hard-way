import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><span className={styles.highlightedColor}>{siteConfig.title}</span></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary"
            to="/tutorials/category/basic-topics">
            📗 Learn Basic Topics
          </Link>
          <Link
            className="button button--secondary"
            to="/solutions/category/0000---0099">
            ✍️ Solution Explanations
          </Link>
          {/* <span className={styles.gitHubButtonWrapper}>
            <iframe
              className={styles.gitHubButton}
              src="https://ghbtns.com/github-btn.html?user=wingkwong&amp;repo=leetcode-the-hard-way&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="LeetCode The Hard Way - From Absolute Beginner to Quitter">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}