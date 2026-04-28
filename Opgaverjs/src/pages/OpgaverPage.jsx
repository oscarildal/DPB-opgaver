import { useState } from "react";
import { fields, robots } from "../data/appData.js";

const taskTemplates = [
  {
    id: "inspection",
    navn: "Inspektion",
    beskrivelse: "Visuel kontrol af mark, hegn og kørespor.",
    estimeretTid: "1 time og 20 min",
    automation: "75%",
  },
  {
    id: "watering",
    navn: "Vandingscheck",
    beskrivelse: "Gennemgang af fugtniveau, dyser og forsyning.",
    estimeretTid: "45 min",
    automation: "60%",
  },
  {
    id: "spraying",
    navn: "Sprøjtning",
    beskrivelse: "Planlagt behandling med fokus på dækning og sikkerhed.",
    estimeretTid: "2 timer og 10 min",
    automation: "82%",
  },
  {
    id: "sensor",
    navn: "Sensor kalibrering",
    beskrivelse: "Kalibrering af fugt- og positionssensorer i feltet.",
    estimeretTid: "55 min",
    automation: "68%",
  },
];

const wizardSteps = [
  { id: 0, label: "Start" },
  { id: 1, label: "Vælg mark" },
  { id: 2, label: "Vælg opgave" },
  { id: 3, label: "Overblik" },
];

function OpgaverPage({ onStartTask }) {
  const [step, setStep] = useState(0);
  const [selectedFieldId, setSelectedFieldId] = useState(fields[0]?.id ?? "");
  const [selectedTaskId, setSelectedTaskId] = useState(taskTemplates[0]?.id ?? "");

  const selectedField = fields.find((field) => field.id === selectedFieldId) ?? fields[0];
  const selectedTask = taskTemplates.find((task) => task.id === selectedTaskId) ?? taskTemplates[0];
  const suggestedRobot =
    robots.find((robot) => robot.fieldId === selectedField?.id) ??
    robots.find((robot) => robot.status === "Klar") ??
    robots[0];

  const nextStep = () => setStep((current) => Math.min(current + 1, wizardSteps.length - 1));
  const previousStep = () => setStep((current) => Math.max(current - 1, 0));
  const resetWizard = () => setStep(0);
  const handleStartTask = () => {
    onStartTask({
      robotId: suggestedRobot.id,
      robotName: suggestedRobot.navn,
      fieldId: selectedField.id,
      fieldName: selectedField.navn,
      taskName: selectedTask.navn,
      estimatedTime: selectedTask.estimeretTid,
      automation: selectedTask.automation,
    });
    resetWizard();
  };

  return (
    <section className="page-stack">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Opgaver</p>
          <h2>Start en ny opgave</h2>
          <p className="muted-text">
            Brug task wizard til at vælge mark, opgavetype og få et hurtigt overblik
            før opgaven sendes i drift.
          </p>
        </div>
        <div className="hero-pill">Task wizard til tablet</div>
      </header>

      <article className="surface-card wizard-shell">
        <div className="wizard-topbar">
          <div>
            <p className="eyebrow">Task Wizard</p>
            <h3>Ny opgave</h3>
          </div>
          <button className="secondary-button" onClick={resetWizard} type="button">
            Start forfra
          </button>
        </div>

        <div className="wizard-progress" aria-label="Trin i opgaveflow">
          {wizardSteps.map((wizardStep, index) => (
            <div
              className={`wizard-step ${step === index ? "is-active" : ""} ${step > index ? "is-complete" : ""}`}
              key={wizardStep.id}
            >
              <span className="wizard-step-number">{index + 1}</span>
              <span className="wizard-step-label">{wizardStep.label}</span>
            </div>
          ))}
        </div>

        {step === 0 ? (
          <section className="wizard-panel wizard-intro">
            <div>
              <span className="card-label">Klar til planlægning</span>
              <h3>Opret en ny markopgave</h3>
              <p className="muted-text">
                Guiden samler valg af mark og opgavetype og viser estimeret tid,
                foreslået robot og automationsniveau før start.
              </p>
            </div>

            <div className="wizard-summary-grid">
              <article className="wizard-mini-card">
                <span className="card-label">Marker klar</span>
                <strong>{fields.length}</strong>
              </article>
              <article className="wizard-mini-card">
                <span className="card-label">Opgavetyper</span>
                <strong>{taskTemplates.length}</strong>
              </article>
              <article className="wizard-mini-card">
                <span className="card-label">Robotter online</span>
                <strong>{robots.length}</strong>
              </article>
            </div>

            <div className="wizard-actions">
              <button className="primary-button" onClick={nextStep} type="button">
                Opret opgave
              </button>
            </div>
          </section>
        ) : null}

        {step === 1 ? (
          <section className="wizard-panel">
            <div className="card-heading">
              <h3>Vælg mark</h3>
              <span>{fields.length} muligheder</span>
            </div>

            <div className="wizard-choice-grid">
              {fields.map((field) => (
                <button
                  className={`wizard-choice-card ${selectedFieldId === field.id ? "is-selected" : ""}`}
                  key={field.id}
                  onClick={() => setSelectedFieldId(field.id)}
                  type="button"
                >
                  <strong>{field.navn}</strong>
                  <p>{field.afgroede}</p>
                  <div className="wizard-choice-meta">
                    <span>{field.areal}</span>
                    <span>Vand {field.vand}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="wizard-actions">
              <button className="secondary-button" onClick={previousStep} type="button">
                Tilbage
              </button>
              <button className="primary-button" onClick={nextStep} type="button">
                Næste
              </button>
            </div>
          </section>
        ) : null}

        {step === 2 ? (
          <section className="wizard-panel">
            <div className="card-heading">
              <h3>Vælg opgave for {selectedField.navn}</h3>
              <span>{taskTemplates.length} typer</span>
            </div>

            <div className="wizard-choice-grid">
              {taskTemplates.map((task) => (
                <button
                  className={`wizard-choice-card ${selectedTaskId === task.id ? "is-selected" : ""}`}
                  key={task.id}
                  onClick={() => setSelectedTaskId(task.id)}
                  type="button"
                >
                  <strong>{task.navn}</strong>
                  <p>{task.beskrivelse}</p>
                  <div className="wizard-choice-meta">
                    <span>{task.estimeretTid}</span>
                    <span>Auto {task.automation}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="wizard-actions">
              <button className="secondary-button" onClick={previousStep} type="button">
                Tilbage
              </button>
              <button className="primary-button" onClick={nextStep} type="button">
                Opret oversigt
              </button>
            </div>
          </section>
        ) : null}

        {step === 3 ? (
          <section className="wizard-panel">
            <div className="card-heading">
              <h3>Klar til opstart</h3>
              <span>Estimeret plan</span>
            </div>

            <div className="wizard-review-grid">
              <article className="wizard-review-card">
                <span className="card-label">Mark</span>
                <strong>{selectedField.navn}</strong>
                <p>{selectedField.afgroede}</p>
              </article>

              <article className="wizard-review-card">
                <span className="card-label">Opgave</span>
                <strong>{selectedTask.navn}</strong>
                <p>{selectedTask.beskrivelse}</p>
              </article>

              <article className="wizard-review-card">
                <span className="card-label">Estimeret tid</span>
                <strong>{selectedTask.estimeretTid}</strong>
                <p>Automationsniveau {selectedTask.automation}</p>
              </article>

              <article className="wizard-review-card">
                <span className="card-label">Foreslået robot</span>
                <strong>{suggestedRobot.navn}</strong>
                <p>
                  {suggestedRobot.status} • Batteri {suggestedRobot.batteri}
                </p>
              </article>
            </div>

            <div className="wizard-note">
              <strong>Opgaven er klar til opstart.</strong>
              <p>
                Mark: {selectedField.navn} • Robot: {suggestedRobot.navn} • Opgave:{" "}
                {selectedTask.navn}
              </p>
            </div>

            <div className="wizard-actions">
              <button className="secondary-button" onClick={previousStep} type="button">
                Tilbage
              </button>
              <button className="primary-button" onClick={handleStartTask} type="button">
                Start opgave
              </button>
            </div>
          </section>
        ) : null}
      </article>
    </section>
  );
}

export default OpgaverPage;
