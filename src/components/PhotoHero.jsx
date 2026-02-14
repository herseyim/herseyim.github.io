import { useState, useEffect } from 'react'
import { heroPhotos, heroPlaceholder } from '../data/timelineData'
import './PhotoHero.css'

const FALLBACK = heroPlaceholder('Fotoğraf')

export default function PhotoHero() {
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % heroPhotos.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const onImgError = (e) => {
    e.target.onerror = null
    e.target.src = FALLBACK
  }

  return (
    <header className="photo-hero">
      <div className="photo-hero__overlay" />
      <div className={`photo-hero__strip ${mounted ? 'mounted' : ''}`}>
        {heroPhotos.map((src, i) => (
          <div
            key={i}
            className={`photo-hero__slide ${i === current ? 'active' : ''}`}
            style={{ '--i': i }}
          >
            <img src={src} alt="" loading="lazy" onError={onImgError} />
          </div>
        ))}
      </div>
      <div className="photo-hero__floating">
        {heroPhotos.slice(0, 4).map((src, i) => (
          <div key={i} className="photo-hero__float" style={{ '--delay': i * 0.5 + 's', '--x': (i % 2 === 0 ? 1 : -1) * (15 + i * 10) + 'px' }}>
            <img src={src} alt="" loading="lazy" onError={onImgError} />
          </div>
        ))}
      </div>
      <div className="photo-hero__dots">
        {heroPhotos.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === current ? 'active' : ''}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  )
}
