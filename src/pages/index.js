import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <span className={styles.highlightedColor}>{siteConfig.title}</span>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary"
            to="/tutorials/category/basic-topics"
          >
            📗 Learn Basic Topics
          </Link>
          <Link
            className="button button--secondary"
            to="/solutions/category/0000---0099"
          >
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
    </section>
  );
}

function HomepageAbout() {
  return (
    <section className={styles.about}>
      <div className="container">
        <h1>📙 About</h1>
        <p style={{ textAlign: 'left' }}>
          Welcome to "LeetCode The Hard Way," the ultimate resource for those
          looking to improve their skills in data structures and algorithms! Our
          website is dedicated to providing comprehensive tutorials and detailed
          solutions to some of the most challenging problems in LeetCode.
          Whether you're a student looking to ace your next exam or a
          professional seeking to level up your coding skills, our tutorials and
          solutions are designed to help you succeed. Our content covers a range
          of popular programming languages, so you can learn and practice using
          the language of your choice.
          <br />
          <br />
          From basic data structures to advanced topics, we've got you covered.
          At "LeetCode The Hard Way," we believe that learning should be fun and
          engaging. With plenty of LC problems and examples to work through,
          you'll have the opportunity to apply what you've learned and test your
          skills. So why wait? Start exploring our tutorials and solutions
          today, and take the first step towards becoming a DSA expert!
        </p>
      </div>
    </section>
  );
}

function HomepageAdvertise() {
  return (
    <section className={styles.advertise}>
      <div className="container">
        <h1>🤝 Sponsorship and Advertisement</h1>
        <p>
          Interested in advertising on LeetCode The Hard Way? Our website
          provides free and comprehensive tutorials and solutions. As a free
          resource, we rely on the support of our community and advertisers to
          continue providing high-quality content. By sponsoring "LeetCode The
          Hard Way," you'll have the opportunity to connect with our audience
          through targeted advertisements and brand placement, while also
          supporting a valuable resource for programmers everywhere.
        </p>
        <p>
          If you are interested in sponsoring and advertising with us, please
          email us at <a href="mailto:leetcodethehardway@gmail.com">here</a>.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="LeetCode The Hard Way - From Absolute Beginner to Quitter"
    >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4531209581366540"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <HomepageAbout />
        <HomepageAdvertise />
      </main>
    </Layout>
  );
}
