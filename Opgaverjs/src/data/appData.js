export const demoCredentials = {
  email: "landmand@markstyring.dk",
  password: "Traktor123!",
};

export const navigationItems = [
  { id: "forside", label: "Forside", description: "Nøgletal og overblik" },
  { id: "opgaver", label: "Opgaver", description: "Start en ny opgave" },
  { id: "kort", label: "Markkort", description: "Følg robotterne" },
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
    lgbGas: "76%",
    vandstatus: "Stabil",
    aktivOpgave: "Inspektion af Nordmarken",
    estimeretTid: "1 time og 20 min",
    senesteSignal: "2 min siden",
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
    lgbGas: "34%",
    vandstatus: "Afventer data",
    aktivOpgave: "Klargøring ved maskinhuset",
    estimeretTid: "35 min",
    senesteSignal: "Nu",
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
    lgbGas: "91%",
    vandstatus: "God",
    aktivOpgave: "Standby til vandingscheck",
    estimeretTid: "Klar til ny opgave",
    senesteSignal: "1 min siden",
    fieldId: "field-c",
    x: "41%",
    y: "74%",
  },
  {
    id: 4,
    navn: "Markrobot 4",
    status: "Arbejder",
    lokation: "Østbakken",
    batteri: "63%",
    lgbGas: "63%",
    vandstatus: "Lav - hold øje",
    aktivOpgave: "Sprøjtning ved Østbakken",
    estimeretTid: "2 timer og 5 min",
    senesteSignal: "3 min siden",
    fieldId: "field-d",
    x: "74%",
    y: "70%",
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
