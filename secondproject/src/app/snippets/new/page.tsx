import { redirect } from "next/navigation";
import { db } from "@/db/index";

const SnippetsCreatePage = () => {
  const createSnippet = async (formData: FormData) => {
    //server action
    "use server";
    //getdata from the object
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    //store data to the DB

    const newSnipper = await db.secondProject.create({
      data: {
        title,
        code,
      },
    });
    console.log(newSnipper);
    redirect("/");
  };

  return (
    <form className="" action={createSnippet}>
      <h3 className="my-4 font-bold">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            name="title"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code"
            placeholder="Code"
          />
        </div>
        <button
          type="submit"
          className="rounded p-2 bg-blue-500 text-white     "
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetsCreatePage;
