// Reusable CTA button component
export const CTAButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    className="mt-6 px-5 py-3 bg-orange200 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
    onClick={onClick}
    aria-label="Get started"
  >
    {children}
  </button>
);