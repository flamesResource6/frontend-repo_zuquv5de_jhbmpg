import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0B0B12] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B12] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8">
        <div className="py-24 md:py-32">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur text-xs text-slate-200 mb-6">
            Futuristic • Vibrant • Digital Art
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-fuchsia-400 via-purple-300 to-sky-300 bg-clip-text text-transparent">
            Discover and Sell Bold, Immersive Art
          </h1>
          <p className="mt-5 text-slate-300/90 max-w-xl">
            A marketplace for original artworks with immersive 3D vibes. Explore curated pieces, follow artists, and elevate your space with statement visuals.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#gallery" className="px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-sky-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">Explore Gallery</a>
            <a href="#artists" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-slate-100 font-semibold hover:bg-white/15 transition">Become an Artist</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
