import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'DSA Topics Tutorials',
    Svg: require('@site/static/img/undraw_learning_sketching_nd4f.svg').default,
    description: (
      <>
        Learn Data Structures and Algorithms ranged from basic to advanced via LeetCode Problems
      </>
    ),
  },
  {
    title: 'Line By Line Explanations',
    Svg: require('@site/static/img/undraw_onboarding_re_6osc.svg').default,
    description: (
      <>
        Unlike most of posts in Discussion, we tend to provide detailed explanations via Line By Line fashion
      </>
    ),
  },
  {
    title: 'LeetCode Community',
    Svg: require('@site/static/img/undraw_community_re_cyrm.svg').default,
    description: (
      <>
        Join the Discord to discuss Leetcode Topics with the Community in real time
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
