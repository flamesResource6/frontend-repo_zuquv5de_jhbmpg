import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Artists() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/artists`)
        const data = await res.json()
        setArtists(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="artists" className="bg-[#0B0B12] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Artists</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((a) => (
            <article key={a.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-fuchsia-950 via-purple-900 to-sky-900">
                {a.avatar_url ? (
                  <img src={a.avatar_url} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl">🎨</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold truncate">{a.name}</h3>
                {a.bio && <p className="text-sm text-slate-300/80 line-clamp-2">{a.bio}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Artists
