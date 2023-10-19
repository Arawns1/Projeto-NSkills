import CircularSlider from "@fseehawer/react-circular-slider";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function UserSkillCard() {
  return (
    <Card
      className="h-48 w-42 
                    flex 
                    flex-col 
                    px-3 py-5
                    gap-y-2
                    items-center 
                    justify-between 
                    overflow-hidden
                    hover:cursor-pointer"
    >
      <CardHeader className="relative h-full w-full flex justify-center items-center p-0 ">
        <img
          className="
              h-24 w-24
              rounded-full
              z-10
              transition-all 
              hover:scale-105
             "
          src="https://source.unsplash.com/random"
          alt="Random Image"
        />
        <div className="absolute top-[-1] z-0 scale-105">
          <CircularSlider
            width={100}
            min={0}
            max={5}
            initialValue={0}
            dataIndex={5}
            hideKnob
            hideLabelValue
            progressColorFrom="#00bfbd"
            progressColorTo="#009c9a"
            progressSize={12}
            trackColor="#eeeeee32"
            trackSize={12}
          />
        </div>
      </CardHeader>

      <CardContent className=" h-full w-full flex flex-col justify-center items-center ">
        <h1 className="text-xl font-medium">Javascript</h1>
        <span className="text-sm font-light text-muted-foreground">
          Nível 1/5
        </span>
      </CardContent>
    </Card>
  );
}
