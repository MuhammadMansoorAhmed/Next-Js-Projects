"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function updateSnippet(id: number, code: string) {
  await db.secondProject.update({
    where: {
      id,
    },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}
export async function deleteSnippet(id: number) {
  await db.secondProject.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect(`/`);
}

export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  //getdata from the object
  const title = formData.get("title");
  const code = formData.get("code");
  //store data to the DB
  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "title must be a string and longer than 3 characters",
    };
  }
  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "code must be a string and longer than 3 characters",
    };
  }

  const newSnipper = await db.secondProject.create({
    data: {
      title,
      code,
    },
  });
  console.log(newSnipper);
  revalidatePath("/");
  redirect("/");
};