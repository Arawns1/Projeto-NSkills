import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function WelcomeSection() {
  return (
    <section className="flex flex-row justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Olá, Gabriel</h1>
        <span className="text-lg font-light text-muted-foreground">
          Bem-vindo(a) ao NekiSkills
        </span>
      </div>

      <Avatar className="w-14 h-14">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </section>
  );
}
