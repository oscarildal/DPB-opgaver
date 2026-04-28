import BrandLogo from "./BrandLogo.jsx";
import GlobalStatusBar from "./GlobalStatusBar.jsx";
import { navigationItems } from "../data/appData.js";

function AppLayout({ activePage, children, onLogout, onNavigate, session }) {
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
                <span className="nav-icon">{item.icon}</span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
              </button>
            ))}
          </nav>

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
          <GlobalStatusBar session={session} />
          {children}
        </section>
      </div>
    </main>
  );
}

export default AppLayout;
