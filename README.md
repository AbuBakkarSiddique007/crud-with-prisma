# Learn Prisma ORM

This project demonstrates CRUD operations using Prisma ORM with TypeScript.

## Requirements

- Node.js (v16 or higher recommended)
- npm (v8 or higher recommended)
- TypeScript
- Prisma ORM
- A supported database (e.g., SQLite, PostgreSQL, MySQL)

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd Learn_Prisma_orm
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure the database**
   - Edit `prisma/schema.prisma` to set your database provider and connection string.
   - Example for SQLite (default):
     ```prisma
     datasource db {
       provider = "sqlite"
       url      = "file:./dev.db"
     }
     ```
   - For PostgreSQL or MySQL, update the `provider` and `url` accordingly.

4. **Run Prisma Migrations**
   ```sh
   npx prisma migrate dev --name init
   ```
   This will create the database and apply migrations.

5. **Generate Prisma Client**
   ```sh
   npx prisma generate
   ```

6. **Run the project scripts**
   - To run the main script:
     ```sh
     npx ts-node script.ts
     ```
   - To run the CRUD example:
     ```sh
     npx ts-node crud.ts
     ```

7. **(Optional) Open Prisma Studio**
   ```sh
   npx prisma studio
   ```
   This opens a visual interface to view and edit your database.

## Useful Commands

- Install dependencies: `npm install`
- Run migrations: `npx prisma migrate dev --name <migration-name>`
- Generate client: `npx prisma generate`
- Run script: `npx ts-node script.ts` or `npx ts-node crud.ts`
- Open Prisma Studio: `npx prisma studio`

## Notes

- Make sure to update the database connection string in `prisma/schema.prisma` as per your environment.
- You may need to install `ts-node` globally if not present: `npm install -g ts-node`.
- For more information, visit the [Prisma documentation](https://www.prisma.io/docs/).
