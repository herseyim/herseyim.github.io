import { timelineEvents } from '../data/timelineData'
import './Timeline.css'

export default function Timeline() {
  return (
    <section className="timeline">
      <h2 className="timeline__heading">Kronolojimiz</h2>
      <div className="timeline__line" />
      <div className="timeline__list">
        {timelineEvents.map((event, index) => (
          <article
            key={event.id}
            className={`timeline__item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline__card">
              <div className="timeline__date">{event.date}</div>
              <h3 className="timeline__title">{event.title}</h3>
              <p className="timeline__description">{event.description}</p>
              <div className="timeline__image-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            </div>
            <div className="timeline__dot" aria-hidden />
          </article>
        ))}
      </div>
    </section>
  )
}
