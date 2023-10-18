import "./App.css";
import { Search, UserCircle2 } from "lucide-react";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CircularSlider from "@fseehawer/react-circular-slider";

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-y-5 ">
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
      <main className="w-full h-full flex flex-col gap-y-8 px-4">
        <div className="flex flex-row justify-between">
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
        </div>

        <div className="bg-card grid w-full items-center gap-1.5 relative">
          <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
          <Input
            className="pl-12 pr-4"
            type="text"
            placeholder="Busque por uma skill"
          />
        </div>

        <Card className="h-52 w-full grid grid-cols-2 gap-1.5 items-center px-2">
          <CardContent className=" h-full w-full justify-center flex flex-col gap-5 p-0 px-2">
            <h1 className="text-lg font-normal text-left">
              <b>Aprimore suas habilidades</b> com o NekiSkills
            </h1>
            <Button className="w-full" variant="default">
              Saiba mais
            </Button>
          </CardContent>

          <CardContent className="p-0 m-0 h-48 w-full flex justify-center ">
            <img
              className="h-full w-full object-cover object-center rounded-xl"
              src="https://source.unsplash.com/random"
              alt="Random Image"
            />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium"> Minhas Skills</h1>
          <Separator />
          <ul className="flex flex-row gap-x-8 overflow-x-scroll snap-x scrollbar-hide md:scrollbar-hide">
            <li className="snap-center">
              <Card className="h-44 w-42 flex flex-col px-3 py-2 items-center justify-center overflow-hidden ">
                <CardHeader className=" h-2/3 w-full flex justify-center items-center p-0">
                  <img
                    className="h-24 w-24
                              rounded-full
                              transition-all 
                              hover:scale-105
                            border-cyan-600 
                              border-4"
                    src="https://source.unsplash.com/random"
                    alt="Random Image"
                  />
                </CardHeader>
                {/* <CircularSlider
                  min={0}
                  max={5}
                  initialValue={2}
                  isDragging={false}
                /> */}
                <CardContent className=" h-1/3 w-full flex flex-col justify-center items-center ">
                  <h1 className="text-xl font-medium">Javascript</h1>
                  <span className="text-sm font-light text-muted-foreground">
                    Descrição
                  </span>
                </CardContent>
              </Card>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
