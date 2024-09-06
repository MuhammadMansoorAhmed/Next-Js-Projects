"use client";
import type { secondProject } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: secondProject;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  const editSnippetAction = actions.updateSnippet.bind(null, snippet.id, code);

  return (
    <div className="m-4">
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
      <form action={editSnippetAction}>
        <button className="border-gray-500 px-6 py-2 bg-slate-500 hover:bg-slate-700 hover:duration-300 text-white rounded-md my-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
