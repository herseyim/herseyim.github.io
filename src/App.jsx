import PhotoHero from './components/PhotoHero'
import Timeline from './components/Timeline'
import './App.css'

function App() {
  return (
    <div className="app">
      <PhotoHero />
      <main>
        <Timeline />
      </main>
      <footer className="footer">
        <p>Seninle her an güzel.</p>
      </footer>
    </div>
  )
}

export default App
