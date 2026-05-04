import BrandLogo from "../components/BrandLogo.jsx";
import { demoCredentials } from "../data/appData.js";

function LoginPage({ error, form, isSubmitting, onChange, onSubmit }) {
  return (
    <main className="app-shell login-shell">
      <section className="login-layout">
        <div className="brand-panel">
          <BrandLogo />
          <h1>Velkommen til Ventrigo Agrobotics</h1>
          <p className="lead">
            Log ind for at få adgang til Ventrigo Agrobotics' driftssystem til landbrugsrobotter og markovervågning.
          </p>
          <p>
            Ventrigo Agrobotics styrker din drift med automatisering, intelligent dataindsigt og et samlet overblik over opgaver, robotter og marker.
          </p>
        </div>

        <section className="login-panel">
          <div className="panel-header">
            <p className="eyebrow">Login</p>
            <h2>Log ind på driftscenteret</h2>
            <p>
              Brug dit login for at gå videre og åbne din Ventrigo-platform.
            </p>
          </div>

          <form className="login-form" onSubmit={onSubmit}>
            <label>
              Email
              <input
                autoComplete="email"
                name="email"
                onChange={onChange}
                type="email"
                value={form.email}
              />
            </label>

            <label>
              Adgangskode
              <input
                autoComplete="current-password"
                name="password"
                onChange={onChange}
                type="password"
                value={form.password}
              />
            </label>

            {error ? <p className="form-error">{error}</p> : null}

            <button className="primary-button" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Logger ind..." : "Log ind"}
            </button>
          </form>

          <div className="demo-box">
            <p>Demo-bruger</p>
            <code>{demoCredentials.email}</code>
            <code>{demoCredentials.password}</code>
          </div>
        </section>
      </section>
    </main>
  );
}

export default LoginPage;
