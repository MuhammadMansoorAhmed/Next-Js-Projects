import SnippetEditForm from "@/Components/snippet_edit_from";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetsEditPageProps {
  params: {
    id: string;
  };
}

const SnippetsEditPage = async (props: SnippetsEditPageProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.secondProject.findFirst({
    where: {
      id: id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetsEditPage;
