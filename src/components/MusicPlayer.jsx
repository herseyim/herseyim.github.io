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

  // Şarkıyı otomatik başlat: yüklendiğinde ve ilk tıklamada dene
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 1

    const tryPlay = () => {
      const p = audio.play()
      if (p) p.catch(() => {})
    }

    tryPlay()
    audio.addEventListener('canplay', tryPlay, { once: true })

    const onFirstInteraction = () => {
      tryPlay()
      document.removeEventListener('click', onFirstInteraction)
      document.removeEventListener('touchstart', onFirstInteraction)
    }
    document.addEventListener('click', onFirstInteraction, { once: true })
    document.addEventListener('touchstart', onFirstInteraction, { once: true })

    return () => {
      audio.removeEventListener('canplay', tryPlay)
    }
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
