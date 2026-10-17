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
              {[0, 1, 2].map((slot) => (
                <div className="sponsors-marquee-placeholder" key={slot}>
                  <Heart size={18} aria-hidden="true" />
                  <span>Your logo here</span>
                </div>
              ))}
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
