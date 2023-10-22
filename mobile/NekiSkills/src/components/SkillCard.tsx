import React, { useContext } from "react";
import {
  Card,
  CardProps,
  H4,
  H5,
  Paragraph,
  SizableText,
  Text,
  YStack,
} from "tamagui";
import { Skill, userSkillResponse } from "../types/skillTypes";
import { XStack } from "tamagui";
import { Image } from "tamagui";
import { DataContext, DataContextType } from "../context/DataContext";
import RemoveSkillModal from "./RemoveSkillModal";
import AddSkillModal from "./AddSkillModal";
import { EditSkillModal } from "./EditSkillModal";

type SkillCardProps = CardProps & {
  skill?: Skill | any;
  userSkill?: userSkillResponse | any;
  editCard?: boolean;
};

export default function SkillCard({
  skill,
  userSkill,
  editCard,
  ...rest
}: SkillCardProps) {
  const { userSkills } = useContext(DataContext) as DataContextType;

  function verifyIfUserAlreadyHasSkill() {
    return userSkills?.some(
      (userSkill) => userSkill.userSkills.id === skill.id
    );
  }

  if (editCard) {
    return (
      <Card
        elevation={"$0.5"}
        size="$4"
        width={"100%"}
        height={100}
        f={1}
        flexDirection="row"
        jc="space-between"
        ai="center"
        pr={"$2"}
      >
        <Card.Header jc={"center"} height={"100%"} py={0} px={"$3"}>
          <XStack ai={"center"} gap={"$3"}>
            <Image
              resizeMode="contain"
              source={{
                width: 60,
                height: 60,
                uri: userSkill?.userSkills.imageUrl,
              }}
            />
            <YStack maxWidth={120} gap={"$-1"}>
              <SizableText
                numberOfLines={1}
                ellipsizeMode="tail"
                fontSize={"$5"}
                fontWeight={"bold"}
                style={{ textTransform: "capitalize" }}
              >
                {userSkill?.userSkills.name}
              </SizableText>
              <Paragraph
                color={"$gray3"}
                opacity={0.5}
                numberOfLines={2}
                ellipsizeMode="tail"
                fontSize={"$1"}
                fontWeight={"$1"}
                style={{ textTransform: "capitalize" }}
              >
                {userSkill?.userSkills.description}
              </Paragraph>
              <Paragraph
                color={"$gray3"}
                opacity={0.5}
                numberOfLines={1}
                ellipsizeMode="tail"
                fontSize={"$4"}
                fontWeight={"$2"}
              >
                Nível {userSkill?.skillLevel}/5
              </Paragraph>
            </YStack>
          </XStack>
        </Card.Header>
        <EditSkillModal userSkill={userSkill} />
      </Card>
    );
  }

  return (
    <>
      <Card
        elevation={"$0.5"}
        size="$4"
        width={"100%"}
        height={100}
        f={1}
        flexDirection="row"
        jc="space-between"
        ai="center"
        pr={"$2"}
      >
        <Card.Header jc={"center"} height={"100%"} py={0} px={"$3"}>
          <XStack ai={"center"} gap={"$3"}>
            <Image
              resizeMode="contain"
              source={{
                width: 60,
                height: 60,
                uri: skill?.imageUrl,
              }}
            />
            <YStack maxWidth={120}>
              <SizableText
                numberOfLines={1}
                ellipsizeMode="tail"
                fontSize={"$6"}
                fontWeight={"bold"}
                style={{ textTransform: "capitalize" }}
              >
                {skill?.name}
              </SizableText>
              <Paragraph
                color={"$gray3"}
                opacity={0.5}
                numberOfLines={2}
                ellipsizeMode="tail"
                fontSize={"$2"}
                fontWeight={"$1"}
                style={{ textTransform: "capitalize" }}
              >
                {skill?.description}
              </Paragraph>
            </YStack>
          </XStack>
        </Card.Header>

        {verifyIfUserAlreadyHasSkill() ? (
          <RemoveSkillModal skill={skill} />
        ) : (
          <AddSkillModal skill={skill} />
        )}
      </Card>
    </>
  );
}
