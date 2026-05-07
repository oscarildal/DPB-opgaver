import BrandLogo from "./BrandLogo.jsx";
import GlobalStatusBar from "./GlobalStatusBar.jsx";
import { navigationItems } from "../data/appData.js";

const navigationIcons = {
  forside: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3 11.4 12 4l9 7.4" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M9.5 20v-5.5h5V20" />
    </svg>
  ),
  opgaver: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.5 5.5h7" />
      <path d="M9 4h6l1 2h3v14H5V6h3l1-2Z" />
      <path d="m8.5 12 2 2 4.5-5" />
      <path d="M8.5 17h7" />
    </svg>
  ),
  kort: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
      <path d="M12 9.5a2.2 2.2 0 0 1 2.2 2.2c0 1.5-2.2 4-2.2 4s-2.2-2.5-2.2-4A2.2 2.2 0 0 1 12 9.5Z" />
      <path d="M12 11.7h.01" />
    </svg>
  ),
};

function AppLayout({
  activePage,
  children,
  emergencyStopActive,
  onEmergencyStop,
  onLogout,
  onNavigate,
  onStopCancel,
  onStopConfirm,
  session,
  showStopConfirmation,
}) {
  return (
    <main className="app-shell">
      <div className="app-frame">
        <aside className="side-panel">
          <div className="brand-lockup">
            <BrandLogo />
            <h1>{session.gaard}</h1>
            <p className="muted-text">
              Tablet-venligt overblik over drift, opgaver og robotter i marken.
            </p>
          </div>

          <nav className="main-nav" aria-label="Hovednavigation">
            {navigationItems.map((item) => (
              <button
                className={`nav-button ${activePage === item.id ? "is-active" : ""}`}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                type="button"
              >
                <span className="nav-icon">{navigationIcons[item.id]}</span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
              </button>
            ))}
          </nav>

          <button
            aria-pressed={emergencyStopActive}
            className={`emergency-stop-button ${emergencyStopActive ? "is-active" : ""}`}
            onClick={onEmergencyStop}
            type="button"
          >
            <strong>{emergencyStopActive ? "STOP AKTIVERET" : "STOP"}</strong>
            <span>{emergencyStopActive ? "Alle robotter er stoppet" : "Stop alle robotter"}</span>
          </button>

          <div className="side-summary">
            <p className="eyebrow">Bruger</p>
            <strong>{session.navn}</strong>
            <p className="muted-text">
              Login via {session.mode === "database" ? "database" : "demo"}.
            </p>
            <button className="secondary-button full-width" onClick={onLogout} type="button">
              Log ud
            </button>
          </div>
        </aside>

        <section className="content-shell">
          <GlobalStatusBar emergencyStopActive={emergencyStopActive} session={session} />
          {children}
        </section>
      </div>

      {showStopConfirmation && (
        <div className="modal-backdrop" role="presentation">
          <section
            aria-labelledby="stop-confirm-title"
            aria-modal="true"
            className="stop-confirmation-dialog"
            role="dialog"
          >
            <p className="eyebrow">Bekræft nødstop</p>
            <h2 id="stop-confirm-title">Stop alle robotter?</h2>
            <p>
              Hvis du bekræfter, stoppes alle aktive robotter, og igangværende opgaver ryddes fra
              kortet.
            </p>
            <div className="stop-confirmation-actions">
              <button className="secondary-button" onClick={onStopCancel} type="button">
                Annuller
              </button>
              <button className="danger-button" onClick={onStopConfirm} type="button">
                Bekræft stop
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default AppLayout;
