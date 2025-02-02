import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'DSA Topics Tutorials',
    Svg: require('@site/static/img/undraw_learning_sketching_nd4f.svg').default,
    description: (
      <>
        Acquire knowledge of Data Structures and Algorithms, covering a range
        from fundamental to advanced level, by working through problems on
        LeetCode.
      </>
    ),
  },
  {
    title: 'Detailed Explanations',
    Svg: require('@site/static/img/undraw_onboarding_re_6osc.svg').default,
    description: (
      <>
        In contrast to many discussions posts, our approach is to offer in-depth
        explanations, both in-line and in the form of articles.
      </>
    ),
  },
  {
    title: 'LeetCode Community',
    Svg: require('@site/static/img/undraw_community_re_cyrm.svg').default,
    description: (
      <>
        Join our Discord group to engage in live conversations about Leetcode
        topics with other community members.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
