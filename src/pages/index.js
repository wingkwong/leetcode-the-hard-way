import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <img src="https://user-images.githubusercontent.com/35857179/168307611-1b28018b-fc98-4cff-88a6-d8312ac7bce6.png"/> 
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
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
