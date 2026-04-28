import { fields, robots } from "../data/appData.js";

function KortPage({ activeAssignments = [] }) {
  const assignmentsByRobot = new Map(
    activeAssignments.map((assignment) => [assignment.robotId, assignment]),
  );

  return (
    <section className="page-stack">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Markkort</p>
          <h2>Følg robotterne ude på markerne</h2>
          <p className="muted-text">
            Her får du et enkelt visuelt kort, som senere kan kobles til rigtige GPS-data.
          </p>
        </div>
      </header>

      <section className="content-grid map-layout">
        <article className="surface-card map-card">
          <div className="map-area">
            {fields.map((field, index) => (
              <div className={`field-shape ${field.tone} field-${index + 1}`} key={field.id}>
                <strong>{field.navn}</strong>
                <span>{field.afgroede}</span>
              </div>
            ))}

            {robots.map((robot) => (
              <div
                className={`robot-marker ${assignmentsByRobot.has(robot.id) ? "has-assignment" : ""}`}
                key={robot.id}
                style={{ left: robot.x, top: robot.y }}
              >
                <span>{robot.id}</span>
                {assignmentsByRobot.has(robot.id) ? (
                  <small className="robot-marker-task">
                    {assignmentsByRobot.get(robot.id).taskName}
                  </small>
                ) : null}
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card">
          <div className="card-heading">
            <h3>Robotter på kortet</h3>
            <span>{robots.length} enheder</span>
          </div>
          <div className="robot-list">
            {robots.map((robot) => (
              <div className="robot-row" key={robot.id}>
                <div>
                  <strong>{robot.navn}</strong>
                  <p>
                    {robot.lokation} • Batteri {robot.batteri}
                  </p>
                  {assignmentsByRobot.has(robot.id) ? (
                    <p className="robot-assignment-text">
                      I gang med {assignmentsByRobot.get(robot.id).taskName} i{" "}
                      {assignmentsByRobot.get(robot.id).fieldName}
                    </p>
                  ) : (
                    <p className="robot-assignment-text muted-text">Ingen aktiv opgave endnu.</p>
                  )}
                </div>
                <span className={`status-pill status-${robot.status.toLowerCase()}`}>
                  {robot.status}
                </span>
              </div>
            ))}
          </div>

          <div className="field-legend">
            {fields.map((field) => (
              <div className="legend-item" key={field.id}>
                <span className={`legend-dot ${field.tone}`} />
                <div>
                  <strong>{field.navn}</strong>
                  <p>
                    {field.afgroede} • {field.areal} • Vand {field.vand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
}

export default KortPage;
