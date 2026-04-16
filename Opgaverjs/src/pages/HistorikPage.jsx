import { historyItems } from "../data/appData.js";

function HistorikPage() {
  return (
    <section className="page-stack">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Historik</p>
          <h2>Seneste aktivitet på gården</h2>
          <p className="muted-text">
            Brug historikken til hurtigt at se hændelser, fejl og afsluttede opgaver.
          </p>
        </div>
      </header>

      <article className="surface-card">
        <div className="timeline">
          {historyItems.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-time">{item.tidspunkt}</div>
              <div className="timeline-content">
                <h3>{item.titel}</h3>
                <p>{item.beskrivelse}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default HistorikPage;
