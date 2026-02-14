import { useState, useEffect } from 'react'
import { heroPhotos, heroPlaceholder } from '../data/timelineData'
import './PhotoHero.css'

const FALLBACK = heroPlaceholder('Fotoğraf')

const COLLAGE_DURATION_MS = 15000
const ALBUM_SLIDE_MS = 5000

/** Kolajdaki her fotoğrafın konumu – 35 foto, boşluk bırakmadan sık dağıtılmış */
function getCollagePosition(i, total) {
  const positions = [
    { left: 8, top: 6, rot: -3, z: 1 },
    { left: 24, top: 10, rot: 2, z: 2 },
    { left: 42, top: 5, rot: -1, z: 1 },
    { left: 58, top: 12, rot: 3, z: 2 },
    { left: 74, top: 8, rot: -2, z: 1 },
    { left: 90, top: 14, rot: 1, z: 2 },
    { left: 14, top: 24, rot: 2, z: 2 },
    { left: 32, top: 20, rot: -2, z: 1 },
    { left: 50, top: 26, rot: 1, z: 2 },
    { left: 68, top: 22, rot: -3, z: 1 },
    { left: 84, top: 28, rot: 2, z: 2 },
    { left: 6, top: 38, rot: -1, z: 1 },
    { left: 24, top: 42, rot: 3, z: 2 },
    { left: 44, top: 36, rot: -2, z: 1 },
    { left: 62, top: 40, rot: 1, z: 2 },
    { left: 80, top: 44, rot: 2, z: 1 },
    { left: 94, top: 38, rot: -1, z: 2 },
    { left: 12, top: 54, rot: 2, z: 2 },
    { left: 30, top: 50, rot: -2, z: 1 },
    { left: 50, top: 56, rot: 1, z: 2 },
    { left: 70, top: 52, rot: -3, z: 1 },
    { left: 88, top: 58, rot: 2, z: 2 },
    { left: 8, top: 68, rot: -1, z: 1 },
    { left: 28, top: 72, rot: 3, z: 2 },
    { left: 48, top: 66, rot: -2, z: 1 },
    { left: 66, top: 70, rot: 1, z: 2 },
    { left: 84, top: 74, rot: 2, z: 1 },
    { left: 16, top: 84, rot: -2, z: 2 },
    { left: 36, top: 80, rot: 1, z: 1 },
    { left: 56, top: 86, rot: -3, z: 2 },
    { left: 74, top: 82, rot: 2, z: 1 },
    { left: 92, top: 88, rot: -1, z: 2 },
    { left: 22, top: 94, rot: 3, z: 1 },
    { left: 44, top: 92, rot: -2, z: 2 },
    { left: 64, top: 96, rot: 1, z: 1 },
    { left: 82, top: 90, rot: 2, z: 2 },
  ]
  return positions[i % positions.length]
}

export default function PhotoHero() {
  const [phase, setPhase] = useState('collage')
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const t = setTimeout(() => setPhase('album'), COLLAGE_DURATION_MS)
    return () => clearTimeout(t)
  }, [mounted])

  useEffect(() => {
    if (phase !== 'album') return
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % heroPhotos.length)
    }, ALBUM_SLIDE_MS)
    return () => clearInterval(t)
  }, [phase])

  const onImgError = (e) => {
    e.target.onerror = null
    e.target.src = FALLBACK
  }

  return (
    <header className="photo-hero">
      <div className="photo-hero__overlay" />

      {/* Aşama 1: İlk “foto” = hepsinin toplu gösterimi (kolaj) */}
      <div
        className={`photo-hero__collage ${mounted ? 'mounted' : ''} ${phase === 'album' ? 'photo-hero__collage--hidden' : ''}`}
      >
        <div className="photo-hero__collage-inner">
          {heroPhotos.map((src, i) => {
            const pos = getCollagePosition(i, heroPhotos.length)
            return (
              <div
                key={i}
                className="photo-hero__collage-item"
                style={{
                  '--left': pos.left + '%',
                  '--top': pos.top + '%',
                  '--rot': pos.rot + 'deg',
                  '--z': pos.z,
                }}
              >
                <img src={src} alt="" loading="lazy" onError={onImgError} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Aşama 2: Albüm – sadece öne çıkan foto büyük ortada */}
      <div className={`photo-hero__album ${phase === 'album' ? 'photo-hero__album--visible' : ''}`}>
        <div className="photo-hero__album-current">
          <img key={current} src={heroPhotos[current]} alt="" onError={onImgError} />
        </div>
      </div>

      {phase === 'album' && (
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
      )}
    </header>
  )
}
