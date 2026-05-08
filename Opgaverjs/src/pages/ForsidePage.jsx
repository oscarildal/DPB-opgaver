import { useState } from "react";
import { fields, robots, tasks } from "../data/appData.js";

function ForsidePage({ emergencyStopActive, session }) {
  const [selectedRobotId, setSelectedRobotId] = useState(robots[0]?.id);
  const selectedRobot = robots.find((robot) => robot.id === selectedRobotId) ?? robots[0];
  const selectedField = fields.find((field) => field.id === selectedRobot?.fieldId);
  const priorityClasses = {
    Høj: "priority-high",
    Mellem: "priority-medium",
    Lav: "priority-low",
  };
  const selectedRobotStats = [
    {
      label: "Vandstatus",
      value: selectedRobot.vandstatus,
      note: selectedField
        ? `${selectedRobot.navn} på ${selectedField.navn}: ${selectedField.vand} vandniveau`
        : `${selectedRobot.navn} har ingen aktiv mark`,
    },
    {
      label: "LGB-gas",
      value: selectedRobot.lgbGas,
      note: `${selectedRobot.navn} sender senest signal ${selectedRobot.senesteSignal}`,
    },
    {
      label: "Estimeret tid",
      value: emergencyStopActive ? "Stoppet" : selectedRobot.estimeretTid,
      note: selectedRobot.aktivOpgave,
    },
  ];

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
      </header>

      <section className="stats-grid">
        {selectedRobotStats.map((item) => (
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
                <span className={`task-priority ${priorityClasses[task.prioritet] ?? ""}`}>
                  {task.prioritet}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card">
          <div className="card-heading">
            <h3>Robotstatus</h3>
            <span>Vælg robot</span>
          </div>
          <div className="robot-list">
            {robots.map((robot) => {
              const status = emergencyStopActive ? "Stoppet" : robot.status;
              const isSelected = selectedRobot.id === robot.id;

              return (
                <button
                  className={`robot-row robot-select-button ${isSelected ? "is-selected" : ""}`}
                  key={robot.id}
                  onClick={() => setSelectedRobotId(robot.id)}
                  type="button"
                >
                  <div>
                    <strong>{robot.navn}</strong>
                    <p>
                      {robot.lokation} • LGB-gas {robot.lgbGas}
                    </p>
                  </div>
                  <span className={`status-pill status-${status.toLowerCase()}`}>{status}</span>
                </button>
              );
            })}
          </div>
        </article>
      </section>
    </section>
  );
}

export default ForsidePage;
