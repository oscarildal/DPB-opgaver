import { tasks } from "../data/appData.js";

function OpgaverPage() {
  return (
    <section className="page-stack">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Opgaver</p>
          <h2>Dagens opgaver og prioritering</h2>
          <p className="muted-text">
            Lavet til tablet, så opgaver er lette at tjekke i marken eller i maskinhuset.
          </p>
        </div>
      </header>

      <article className="surface-card">
        <div className="card-heading">
          <h3>Opgaveliste</h3>
          <span>{tasks.length} aktive</span>
        </div>

        <div className="task-board">
          {tasks.map((task) => (
            <article className="task-board-card" key={task.id}>
              <div className="task-topline">
                <span className="task-time">{task.tidspunkt}</span>
                <span className="task-priority">{task.prioritet}</span>
              </div>
              <h4>{task.titel}</h4>
              <p className="muted-text">Ansvarlig: {task.ansvarlig}</p>
              <div className="status-row">
                <span className="label-chip">{task.status}</span>
              </div>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}

export default OpgaverPage;
