import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.secondProject.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <div
      key={snippet.id}
      className="border-2 border-gray-400 my-2 p-2 rounded-lg"
    >
      <Link className="" href={`/snippets/${snippet.id}`}>
        {snippet.title}
      </Link>
      <p>{snippet.code}</p>
    </div>
  ));
  return (
    <>
      <div className="flex justify-between m-4 border-bottom border-b-2 pb-2">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link
          href={"snippets/new"}
          className="p-2 bg-slate-300 border-2 border-gray-300 rounded-lg"
        >
          New
        </Link>
      </div>
      <div className="flex justify-center flex-col m-8 items-center bg-slate-300 p-8">
        <h1 className="text-xl font-bold">DB Data</h1>
        <p className="text-lg  ">{renderedSnippets}</p>
      </div>
    </>
  );
}
