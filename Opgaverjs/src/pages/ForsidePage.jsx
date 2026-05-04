import { dashboardStats, robots, tasks } from "../data/appData.js";

function ForsidePage({ emergencyStopActive, session }) {
  return (
    <section className="page-stack">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Forside</p>
          <h2>God arbejdsdag, {session.navn}</h2>
          <p className="muted-text">
            Her er et hurtigt overblik over dagens drift på {session.gaard}.
          </p>
        </div>
        <div className="hero-pill">Tablet-optimeret driftsoverblik</div>
      </header>

      <section className="stats-grid">
        {dashboardStats.map((item) => (
          <article className="surface-card compact-card" key={item.label}>
            <span className="card-label">{item.label}</span>
            <strong className="big-number">{item.value}</strong>
            <p className="muted-text">{item.note}</p>
          </article>
        ))}
      </section>

      <section className="content-grid two-columns">
        <article className="surface-card">
          <div className="card-heading">
            <h3>Dagens næste opgaver</h3>
            <span>{tasks.length} i alt</span>
          </div>
          <div className="task-list">
            {tasks.slice(0, 3).map((task) => (
              <div className="task-item" key={task.id}>
                <div>
                  <strong>{task.titel}</strong>
                  <p>
                    {task.tidspunkt} • {task.ansvarlig}
                  </p>
                </div>
                <span className="task-priority">{task.prioritet}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card">
          <div className="card-heading">
            <h3>Robotstatus</h3>
            <span>Live</span>
          </div>
          <div className="robot-list">
            {robots.map((robot) => {
              const status = emergencyStopActive ? "Stoppet" : robot.status;

              return (
                <div className="robot-row" key={robot.id}>
                  <div>
                    <strong>{robot.navn}</strong>
                    <p>
                      {robot.lokation} • Batteri {robot.batteri}
                    </p>
                  </div>
                  <span className={`status-pill status-${status.toLowerCase()}`}>{status}</span>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </section>
  );
}

export default ForsidePage;
