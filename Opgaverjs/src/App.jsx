import { useState } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout.jsx";
import { demoCredentials, robots } from "./data/appData.js";
import ForsidePage from "./pages/ForsidePage.jsx";
import KortPage from "./pages/KortPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OpgaverPage from "./pages/OpgaverPage.jsx";

const initialForm = {
  email: demoCredentials.email,
  password: demoCredentials.password,
};

const pageComponents = {
  forside: ForsidePage,
  opgaver: OpgaverPage,
  kort: KortPage,
};

const initialActiveAssignments = [
  {
    robotId: robots[0].id,
    robotName: robots[0].navn,
    fieldId: robots[0].fieldId,
    fieldName: robots[0].lokation,
    taskName: "Inspektion",
    estimatedTime: "1 time og 20 min",
    automation: "75%",
  },
];

function App() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [session, setSession] = useState(null);
  const [activePage, setActivePage] = useState("forside");
  const [emergencyStopActive, setEmergencyStopActive] = useState(false);
  const [activeAssignments, setActiveAssignments] = useState(initialActiveAssignments);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Login mislykkedes");
      }

      const payload = await response.json();
      setSession({
        navn: payload.user.name,
        gaard: payload.user.farmName,
        mode: "database",
      });
      setActivePage("forside");
      setEmergencyStopActive(false);
      setActiveAssignments(initialActiveAssignments);
      return;
    } catch (requestError) {
      const isDemoLogin =
        form.email === demoCredentials.email &&
        form.password === demoCredentials.password;

      if (isDemoLogin) {
        setSession({
          navn: "Mikkel Jensen",
          gaard: "Enggård Agro",
          mode: "demo",
        });
        setActivePage("forside");
        setEmergencyStopActive(false);
        setActiveAssignments(initialActiveAssignments);
      } else {
        setError(
          requestError.message === "Failed to fetch"
            ? "Backend er ikke startet endnu. Brug demo-login eller start serveren."
            : requestError.message,
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    setSession(null);
    setError("");
    setForm(initialForm);
    setActivePage("forside");
    setEmergencyStopActive(false);
    setActiveAssignments(initialActiveAssignments);
  };

  const handleStartTask = (assignment) => {
    if (emergencyStopActive) {
      return;
    }

    setActiveAssignments((current) => {
      const remainingAssignments = current.filter((item) => item.robotId !== assignment.robotId);
      return [assignment, ...remainingAssignments];
    });
    setActivePage("kort");
  };

  const handleEmergencyStop = () => {
    setEmergencyStopActive(true);
    setActiveAssignments([]);
  };

  if (!session) {
    return (
      <LoginPage
        error={error}
        form={form}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  }

  const ActivePage = pageComponents[activePage];

  return (
    <AppLayout
      activePage={activePage}
      emergencyStopActive={emergencyStopActive}
      onEmergencyStop={handleEmergencyStop}
      onLogout={handleLogout}
      onNavigate={setActivePage}
      session={session}
    >
      <ActivePage
        activeAssignments={activeAssignments}
        emergencyStopActive={emergencyStopActive}
        onStartTask={handleStartTask}
        session={session}
      />
    </AppLayout>
  );
}

export default App;
