import Image from 'next/image';
import Link from 'next/link';
const features = [
  {
    image: '/img/undraw_learning_sketching_nd4f.svg',
    title: 'DSA Topics Tutorials',
    description:
      'Learn data structures and algorithms from fundamentals through advanced techniques while working through LeetCode-style problems.',
  },
  {
    image: '/img/undraw_onboarding_re_6osc.svg',
    title: 'Detailed Explanations',
    description:
      'Read solution writeups with the reasoning, tradeoffs, and implementation details kept together.',
  },
  {
    image: '/img/undraw_community_re_cyrm.svg',
    title: 'LeetCode Community',
    description:
      'Use the tutorials, roadmaps, templates, and solution catalog as a structured path for practice.',
  },
];

const navLinks = [
  { href: '/tutorials/basic-topics', label: 'Tutorials' },
  { href: '/solutions/0000-0099', label: 'Solutions' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/templates', label: 'Templates' },
];

export default function HomePage() {
  return (
    <main className="home">
      <nav className="home-nav">
        <Link className="home-brand" href="/">
          LeetCode The Hard Way
        </Link>
        <div className="home-nav-links">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <section className="home-hero">
        <div className="home-hero-content">
          <h1>LeetCode The Hard Way</h1>
          <p>From Absolute Beginner to Quitter</p>
          <div className="home-actions">
            <Link href="/tutorials/basic-topics">Learn Basic Topics</Link>
            <Link href="/solutions/0000-0099">Solution Explanations</Link>
          </div>
        </div>
      </section>

      <section className="home-features" aria-label="Highlights">
        {features.map((feature) => (
          <article className="home-feature" key={feature.title}>
            <Image
              alt=""
              height={180}
              src={feature.image}
              width={180}
            />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="home-section home-about">
        <h2>About</h2>
        <p>
          Welcome to LeetCode The Hard Way, a resource for improving data
          structures and algorithms skills through tutorials, templates, roadmaps,
          and detailed LeetCode solution explanations across popular programming
          languages.
        </p>
        <p>
          From basic data structures to advanced topics, the site is organized so
          you can learn a concept, practice it, and then study complete solutions.
        </p>
      </section>

      <section className="home-section home-sponsor">
        <h2>Sponsorship and Advertisement</h2>
        <p>
          Interested in advertising on LeetCode The Hard Way? Email{' '}
          <a href="mailto:leetcodethehardway@gmail.com">
            leetcodethehardway@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
