import { Button } from "@nextui-org/react";
import * as actions from "@/actions";

export default function Home() {
  return (
    <>
      <form action={actions.signIn}>
        <Button type="submit" color="secondary">
          Sign In
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit" color="secondary">
          Sign Out
        </Button>
      </form>
    </>
  );
}
