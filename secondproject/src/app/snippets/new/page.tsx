"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

const SnippetsCreatePage = () => {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form className="" action={action}>
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
        {formState.message ? (
          <div className="flex">{formState.message}</div>
        ) : null}
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
