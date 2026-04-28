export const demoCredentials = {
  email: "landmand@markstyring.dk",
  password: "Traktor123!",
};

export const navigationItems = [
  { id: "forside", label: "Forside", description: "Nøgletal og overblik", icon: "H" },
  { id: "opgaver", label: "Opgaver", description: "Dagens plan", icon: "O" },
  { id: "kort", label: "Markkort", description: "Følg robotterne", icon: "K" },
];

export const fieldSummary = [
  { label: "Aktive marker", value: "12" },
  { label: "Dagens opgaver", value: "7" },
  { label: "Maskiner online", value: "5/6" },
];

export const dashboardStats = [
  { label: "Vandstatus", value: "Stabil", note: "3 felter vandes i nat" },
  { label: "Diesel", value: "68%", note: "Næste optankning fredag" },
  { label: "Høstklar", value: "4 marker", note: "Byg og vinterhvede" },
];

export const tasks = [
  {
    id: 1,
    titel: "Tjek vandingsanlæg i Nordmarken",
    tidspunkt: "06:30",
    prioritet: "Høj",
    ansvarlig: "Mikkel",
    status: "I gang",
  },
  {
    id: 2,
    titel: "Planlæg gødning for mark 7",
    tidspunkt: "09:00",
    prioritet: "Mellem",
    ansvarlig: "Signe",
    status: "Planlagt",
  },
  {
    id: 3,
    titel: "Service på robot 2",
    tidspunkt: "14:15",
    prioritet: "Lav",
    ansvarlig: "Værksted",
    status: "Afventer",
  },
  {
    id: 4,
    titel: "Kalibrer fugtsensorer",
    tidspunkt: "16:00",
    prioritet: "Mellem",
    ansvarlig: "Mikkel",
    status: "Planlagt",
  },
];

export const systemAlerts = [
  { id: 1, type: "sensor", message: "Fugtsensor i Vestengen svarer ustabilt." },
  { id: 2, type: "connection", message: "Robot 2 mistede kort signal ved maskinhuset." },
];

export const robots = [
  {
    id: 1,
    navn: "Markrobot 1",
    status: "Arbejder",
    lokation: "Nordmarken",
    batteri: "76%",
    fieldId: "field-a",
    x: "22%",
    y: "28%",
  },
  {
    id: 2,
    navn: "Markrobot 2",
    status: "Lader",
    lokation: "Maskinhuset",
    batteri: "34%",
    fieldId: "field-b",
    x: "66%",
    y: "38%",
  },
  {
    id: 3,
    navn: "Markrobot 3",
    status: "Klar",
    lokation: "Sydengen",
    batteri: "91%",
    fieldId: "field-c",
    x: "41%",
    y: "74%",
  },
];

export const fields = [
  {
    id: "field-a",
    navn: "Nordmarken",
    afgroede: "Vinterhvede",
    vand: "68%",
    areal: "18 ha",
    tone: "tone-1",
  },
  {
    id: "field-b",
    navn: "Vestengen",
    afgroede: "Kartofler",
    vand: "51%",
    areal: "11 ha",
    tone: "tone-2",
  },
  {
    id: "field-c",
    navn: "Sydengen",
    afgroede: "Byg",
    vand: "74%",
    areal: "14 ha",
    tone: "tone-3",
  },
  {
    id: "field-d",
    navn: "Østbakken",
    afgroede: "Raps",
    vand: "60%",
    areal: "9 ha",
    tone: "tone-4",
  },
];
