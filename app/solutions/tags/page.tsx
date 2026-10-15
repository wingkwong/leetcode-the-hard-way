import { StaticRedirect } from '../../../components/static-redirect';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Solutions',
  pathname: '/solutions/',
  type: 'website',
});

export default function SolutionTagsRedirectPage() {
  return <StaticRedirect destination="/solutions/" />;
}
