import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button } from "tamagui";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../types/authTypes";

export default function Profile() {
  const { logout } = useContext(AuthContext) as AuthContextType;
  return (
    <View>
      <Text>Profile</Text>
      <Button
        bg={"$blue10Light"}
        onPress={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </View>
  );
}

