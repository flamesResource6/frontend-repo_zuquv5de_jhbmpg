import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/artworks/featured`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="bg-[#0B0B12] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Artworks</h2>
        </div>

        {loading ? (
          <p className="text-slate-300">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((art) => (
              <article key={art.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={art.image_url} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold truncate">{art.title}</h3>
                  {art.artist_name && (
                    <p className="text-xs text-slate-300/80">by {art.artist_name}</p>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sky-300 font-semibold">${art.price?.toFixed?.(2)}</span>
                    <button className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-sky-500 text-white text-sm font-medium">Add to Cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Featured
