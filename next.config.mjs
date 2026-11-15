/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old addresses that now live somewhere else. Visitors (and Google) are sent
  // straight to the new page. "permanent: true" tells Google the move is for good,
  // so it replaces the old address in search results with the new one.
  async redirects() {
    return [
      {
        // The Billing Questions page was removed; its content is on Pay Bill.
        source: "/billing-questions",
        destination: "/pay-bill",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
