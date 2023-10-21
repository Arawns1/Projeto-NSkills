import { useFonts } from "expo-font";
import { TamaguiProvider, YStack } from "tamagui";
import config from "./tamagui.config";
import Routes from "./src/routes";
export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <YStack f={1}>
        <Routes />
      </YStack>
    </TamaguiProvider>
  );
}
