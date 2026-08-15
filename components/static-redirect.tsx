type StaticRedirectProps = {
  destination: string;
  label?: string;
};

export function StaticRedirect({
  destination,
  label = destination,
}: StaticRedirectProps) {
  return (
    <main>
      <meta content={`0;url=${destination}`} httpEquiv="refresh" />
      <p>
        Redirecting to <a href={destination}>{label}</a>.
      </p>
    </main>
  );
}
