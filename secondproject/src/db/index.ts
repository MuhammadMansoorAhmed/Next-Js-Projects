import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.secondProject.create({
  data: {
    title: "Title!",
    code: "const code = ()=>{}",
  },
});
