https://app.planetscale.com/lilacsweet/gamehub/connect

```bash
npm install -D prisma
npm i @prisma/client
npx prisma db push
npx prisma generate
npx prisma studio
```

```bash
model User {
  id             String   @id @default(uuid())
  username       String   @unique
  imageUrl       String   @db.Text
  externalUserId String   @unique
  bio            String?  @db.Text
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```