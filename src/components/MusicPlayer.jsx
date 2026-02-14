import { useState, useRef, useEffect } from 'react'
import './MusicPlayer.css'

/** Müzik dosyası: public/music/music.mp3 (veya public/music.mp3) */
const DEFAULT_SRC = '/music/music.mp3'

export default function MusicPlayer({ src = DEFAULT_SRC }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.volume = 1
      audio.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onEnd = () => setIsPlaying(false)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    audio.addEventListener('ended', onEnd)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    return () => {
      audio.removeEventListener('ended', onEnd)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  // Sayfa yüklenince müziği otomatik başlat (tarayıcı engellerse butonla başlatılır)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 1
    const p = audio.play()
    if (p) p.catch(() => {})
  }, [])

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <button
        type="button"
        className="music-player__btn"
        onClick={toggle}
        aria-label={isPlaying ? 'Müziği durdur' : 'Müziği çal'}
        title={isPlaying ? 'Müziği durdur' : 'Müziği çal'}
      >
        <span className="music-player__icon" aria-hidden>
          {isPlaying ? '⏸' : '▶'}
        </span>
        <span className="music-player__label">Bizim şarkımız</span>
      </button>
    </>
  )
}
