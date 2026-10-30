'use client';

import { useTOCItems } from 'fumadocs-ui/components/toc';
import { TOC } from 'fumadocs-ui/layouts/docs/page/slots/toc';
import { SponsorsMarquee } from './sponsors-marquee';

const tocContainerClassName =
  'sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 xl:layout:[--fd-toc-width:268px] max-xl:hidden';

export function SponsorsTableOfContent() {
  const items = useTOCItems();

  if (items.length === 0) {
    return (
      <div className={tocContainerClassName} id="nd-toc">
        <SponsorsMarquee className="sponsors-marquee--standalone" />
      </div>
    );
  }

  return <TOC footer={<SponsorsMarquee />} />;
}