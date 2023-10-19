import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { UserCircle2 } from "lucide-react";
export default function Header() {
  return (
    <header className="h-20 px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">NekiSkills</h1>
      <div className="flex items-center gap-3">
        <Separator orientation="vertical" className="h-6" />
        <Button variant={"outline"}>
          <UserCircle2 className="w-4 h-4 mr-2" />
          Login
        </Button>
      </div>
    </header>
  );
}
