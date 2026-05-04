import { robots, systemAlerts } from "../data/appData.js";

function AlertIcon() {
  return (
    <svg aria-hidden="true" className="status-symbol" viewBox="0 0 24 24">
      <path
        d="M12 3 2.7 19.5c-.3.6.1 1.5.9 1.5h16.8c.8 0 1.2-.9.9-1.5L12 3Z"
        fill="currentColor"
      />
      <path d="M12 8v5.3" fill="none" stroke="#fffaf0" strokeLinecap="round" strokeWidth="2" />
      <circle cx="12" cy="17" fill="#fffaf0" r="1.2" />
    </svg>
  );
}

function ConnectionIcon() {
  return (
    <svg aria-hidden="true" className="status-symbol" viewBox="0 0 24 24">
      <path
        d="M4.4 9.3a11.5 11.5 0 0 1 15.2 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M7.5 12.6a7.3 7.3 0 0 1 9 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M10.4 15.8a3.1 3.1 0 0 1 3.2 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <circle cx="12" cy="19" fill="currentColor" r="1.4" />
    </svg>
  );
}

function GlobalStatusBar({ emergencyStopActive, session }) {
  const activeRobots = emergencyStopActive
    ? 0
    : robots.filter((robot) => robot.status === "Arbejder").length;
  const connectionLabel = emergencyStopActive
    ? "STOP aktiveret"
    : session.mode === "database"
      ? "Online"
      : "Demo";
  const connectionTone = session.mode === "database" ? "is-online" : "is-demo";

  return (
    <section aria-label="Global status" className="global-status-bar">
      {emergencyStopActive && (
        <article className="status-card status-card-stop">
          <span className="status-card-label">Nødstop</span>
          <strong className="status-card-value">Alle robotter stoppet</strong>
        </article>
      )}

      <article className="status-card">
        <span className="status-card-label">Aktive Robotter</span>
        <strong className="status-card-value">{activeRobots}</strong>
      </article>

      <article className="status-card status-card-alert">
        <div className="status-card-head">
          <AlertIcon />
          <span className="status-card-label">Fejlmeddelelser</span>
        </div>
        <strong className="status-card-value">{systemAlerts.length}</strong>
      </article>

      <article
        className={`status-card status-card-connection ${
          emergencyStopActive ? "is-stopped" : connectionTone
        }`}
      >
        <div className="status-card-head">
          <ConnectionIcon />
          <span className="status-card-label">Forbindelse</span>
        </div>
        <strong className="status-card-value">{connectionLabel}</strong>
      </article>
    </section>
  );
}

export default GlobalStatusBar;
