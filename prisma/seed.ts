import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  return db.signupForm.create({ data: {
    name: null,
    email: null,
    displayName: null,
    image: null,
    tier: null,
  }});
}

seed();
