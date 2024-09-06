import * as actions from "@/actions";
import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetsShowPageProps {
  params: {
    id: string;
  };
}

const page = async (props: SnippetsShowPageProps) => {
  //   await new Promise((r) => {
  //     setTimeout(r, 2000);
  //   });
  const snippet = await db.secondProject.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });
  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className=" my-8  border-slate-400">
      <div className="flex justify-between p-4 ">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex justify-center gap-2">
          <Link
            className="p-2 border rounded"
            href={`/snippets/${snippet.id}/edit`}
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-4 flex bg-slate-300 rounded  border-slate-500">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default page;
