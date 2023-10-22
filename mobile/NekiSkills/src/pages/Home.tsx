import React, { useContext, useEffect, useState } from "react";
import { Button, H2, Paragraph, Stack, Text, XStack, YStack } from "tamagui";
import MySkillsList from "../components/MySkillsList";
import SearchBar from "../components/SearchBar";
import SkillCard from "../components/SkillCard";
import { DataContext, DataContextType } from "../context/DataContext";
import { Skill } from "../types/skillTypes";
import MainCard from "../components/MainCard";
import { Link, useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/stack.routes";
import { ZStack } from "tamagui";

export default function Home() {
  const { userSkills, fetchUserSkills } = useContext(
    DataContext
  ) as DataContextType;

  useEffect(() => {
    fetchUserSkills();
  }, []);

  const navigation = useNavigation<StackTypes>();

  return (
    <YStack f={1} px={"$3"} gap={"$6"}>
      {/*Welcome Section*/}
      <YStack pt={"$6"}>
        <H2 textAlign="left">Olá, Gabriel</H2>
        <Paragraph theme={"alt2"}>Bem vindo(a) ao NekiSkills</Paragraph>
      </YStack>

      {/*SearchBar*/}
      <Button
        width={"100%"}
        height={50}
        unstyled
        onPress={() => {
          navigation.navigate("SearchPage");
        }}
      >
        <SearchBar disabled />
      </Button>

      <MainCard />
      <MySkillsList userSkills={userSkills} />
    </YStack>
  );
}
