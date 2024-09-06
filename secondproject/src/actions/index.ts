"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function updateSnippet(id: number, code: string) {
  await db.secondProject.update({
    where: {
      id,
    },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}
export async function deleteSnippet(id: number) {
  await db.secondProject.delete({
    where: {
      id,
    },
  });
  redirect(`/`);
}
