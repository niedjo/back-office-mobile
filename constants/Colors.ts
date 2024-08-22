/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  black: {
    DEFAULT: "#000",
    100: "#000319",
    200: "rgba(17, 25, 40, 0.75)",
    300: "rgba(255, 255, 255, 0.125)",
  },
  white: {
    DEFAULT: "#FFF",
    100: "#BEC1DD",
    200: "#C1C2D3",
  },
  blue: {
    "100": "#E4ECFF",
  },
  purple: "#CBACF9",
  blue_or_red : "#FF3D3D"
};
