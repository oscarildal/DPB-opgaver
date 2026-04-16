# Landmandsapp med login

Projektet er nu sat op som en lille prototype med:

- React-frontend med login-skærm og dashboard
- backend-skabelon i `backend/`
- SQL-schema til brugere, gårde, marker, robotter og opgaver

## Frontend

Kør frontend:

```bash
npm install
npm run dev
```

Frontend virker også i demo-tilstand med:

- Email: `landmand@markstyring.dk`
- Adgangskode: `Traktor123!`

## Backend

Kør backend i en separat terminal:

```bash
cd backend
npm install
npm run dev
```

Opret først en PostgreSQL-database og kør derefter `backend/schema.sql`.

Lav en `.env` i `backend/` ud fra `.env.example`.

## Vigtigt

- Gem aldrig passwords i ren tekst
- Brug altid `password_hash`
- SQL er et godt valg her, fordi data i en landmandsapp ofte hænger sammen i relationer
