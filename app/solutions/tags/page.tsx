import type { Metadata } from 'next';
import { StaticRedirect } from '../../../components/static-redirect';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function SolutionTagsRedirectPage() {
  return <StaticRedirect destination="/solutions/" />;
}
