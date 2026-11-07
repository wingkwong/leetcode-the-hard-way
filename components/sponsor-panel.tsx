import { Heart } from 'lucide-react';

type SponsorPanelProps = {
  className?: string;
};

export function SponsorPanel({ className }: SponsorPanelProps) {
  return (
    <section
      className={['sponsor-panel', className].filter(Boolean).join(' ')}
      aria-label="Sponsors"
    >
      <div className="sponsor-list">
        <a
          rel="sponsored"
          className="sponsor-card"
          href="https://www.awin1.com/awclick.php?gid=526254&mid=95005&awinaffid=2074225&linkid=4003993&clickref=leetcodethehardway.com"
          target="_blank"
        >
          <img
            src="/img/algo-monster-logo.svg"
            alt="AlgoMonster"
            width={120}
            height={48}
            className="object-contain"
          />
        </a>
        <a
          rel="sponsored"
          className="sponsor-card"
          style={{ backgroundColor: 'hsl(0, 0%, 12.9%)' }}
          href="https://app.zapply.jobs/onboarding?ref=website-cta-wingkwong"
          target="_blank"
        >
          <img
            src="/img/zapply-sidebar-logo.png"
            alt="Visit Zapply"
            width={120}
            height={48}
            className="object-contain"
          />
        </a>
        <a
          rel="sponsored"
          className="sponsor-card"
          href="https://certgarden.com"
          target="_blank"
        >
          <img
            src="/img/cert-garden-logo.svg"
            alt="CertGarden"
            width={120}
            height={48}
            className="object-contain"
          />
        </a>
        <div className="sponsor-card">
          <Heart size={18} aria-hidden="true" />
          <span>Your logo here</span>
        </div>
      </div>
      <a
        className="sponsor-panel-link"
        href="https://github.com/sponsors/wingkwong/sponsorships?sponsor=wingkwong&tier_id=670478"
        target="_blank"
        rel="noopener noreferrer"
      >
        Become a sponsor <span aria-hidden="true">↗</span>
      </a>
      <hr className="my-4 border-fd-border" />
      <a
        href="https://buymeacoffee.com/leetcodethehardway"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto block w-fit rounded-sm px-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring"
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
          alt="Buy Me A Coffee"
          width={174}
          height={41}
          className="h-[41px] w-[174px]"
        />
      </a>
    </section>
  );
}
