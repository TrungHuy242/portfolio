/**
 * Decorative background elements - grid pattern + gradient orbs.
 */
const BackgroundAtmosphere = () => (
  <div aria-hidden="true">
    {/* Grid overlay */}
    <div
      className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
      style={{
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    {/* Cyan orb */}
    <div className="fixed top-[-20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
    {/* Purple orb */}
    <div className="fixed bottom-[-10%] left-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent-2/10 rounded-full blur-[100px] pointer-events-none z-0" />
  </div>
);

export default BackgroundAtmosphere;
