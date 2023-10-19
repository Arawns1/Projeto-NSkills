import { Separator } from "@radix-ui/react-separator";
import UserSkillCard from "./UserSkillCard";

export default function UserSkillList() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium"> Minhas Skills</h1>
      <Separator />

      <ul className="flex flex-row gap-x-8 overflow-x-scroll snap-x scrollbar-hide md:scrollbar-hide">
        <li className="snap-center">
          <UserSkillCard />
        </li>
      </ul>
    </div>
  );
}
