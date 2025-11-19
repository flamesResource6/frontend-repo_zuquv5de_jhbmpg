import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Artists from './components/Artists'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A12]">
      <Navbar />
      <Hero />
      <Featured />
      <Artists />
      <footer className="bg-[#0B0B12] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Aurora Arts. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Crafted with love for creators.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
