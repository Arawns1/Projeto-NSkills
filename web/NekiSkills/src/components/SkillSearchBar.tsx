import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SkillSearchBar() {
  return (
    <div className="bg-card grid w-full items-center gap-1.5 relative">
      <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
      <Input
        className="pl-12 pr-4"
        type="text"
        placeholder="Busque por uma skill"
      />
    </div>
  );
}
