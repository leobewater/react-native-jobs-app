import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// make splash screen viewable when loading
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // setting fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../asssets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../asssets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../asssets/fonts/DMSans-Regular.ttf"),
  });

  // loading fonts
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
