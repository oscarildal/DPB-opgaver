import { demoCredentials, fieldSummary } from "../data/appData.js";

function LoginPage({ error, form, isSubmitting, onChange, onSubmit }) {
  return (
    <main className="app-shell login-shell">
      <section className="login-layout">
        <div className="brand-panel">
          <p className="eyebrow">Landmandsapp</p>
          <h1>Hold styr på marker, robotter og drift direkte fra din tablet.</h1>
          <p className="lead">
            Appen er bygget som et arbejdsrum med ét login og fire centrale
            skærme: forside, opgaver, historik og markkort.
          </p>

          <div className="info-grid">
            {fieldSummary.map((item) => (
              <article className="info-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <section className="login-panel">
          <div className="panel-header">
            <p className="eyebrow">Login</p>
            <h2>Log ind på driftscenteret</h2>
            <p>
              Demo-login er udfyldt, så du hurtigt kan se hele løsningen i gang.
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
