import { Heart } from 'lucide-react';

export function SponsorsMarquee() {
  return (
    <section className="sponsors-marquee" aria-label="Sponsors">
      <div className="sponsors-marquee-viewport">
        <div className="sponsors-marquee-track">
          {[false, true].map((duplicate) => (
            <div
              className="sponsors-marquee-group"
              aria-hidden={duplicate || undefined}
              key={String(duplicate)}
            >
              <a
                rel="sponsored"
                className="sponsors-marquee-placeholder"
                href="https://www.awin1.com/awclick.php?gid=526254&mid=95005&awinaffid=2074225&linkid=4003993&clickref=leetcodethehardway.com"
                tabIndex={duplicate ? -1 : undefined}
                target="_blank"
              >
                <img
                  src="https://assets.algo.monster/AlgoMonster.svg"
                  alt="AlgoMonster"
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </a>
              <div className="sponsors-marquee-placeholder" key="empty-slot">
                <Heart size={18} aria-hidden="true" />
                <span>Your logo here</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a
        className="sponsors-marquee-link"
        href="https://github.com/sponsors/wingkwong"
        target="_blank"
        rel="noopener noreferrer"
      >
        Become a sponsor <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
