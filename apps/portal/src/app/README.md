# Project Setup

### 1. Create Local PostgreSQL Database

- Create a PostgreSQL database named `project_database`.
- Use the following credentials:
  - **User:** postgres
  - **Password:** 1234
- Ensure the database runs on port `5432` on `localhost`.

### 2. Insert Mock Data into Database

- Run the following command to insert mock data into the database and create the necessary table:
  ```bash
  python3 database.py
  ```

### 3. Start the Portal

- Use one of the following commands to run the portal:

```bash
pnpm nx dev portal
```

or:

```bash
nx dev portal
```

### 4. View the Charts

- Go to this page to view charts for the mock data:

```bash
http://localhost:3000
```
