import { StyleSheet } from "react-native";

export default {
  COLORS: {
    // PRIMARY_100: '#',

    // SECONDARY_100: '#',

    BACK_GROUND: "#29292E",

    BLACK_900: "#000000",

    BLUE: "#236DF8",

    GRAY_100: "#F2F2F2",
    GRAY_200: "#121214",
    GRAY_300: "#323238",
    GRAY_400: "#202024",

    GREEN: "#05E219",

    WHITE: "#FFFFFF",
  },

  FONT_FAMILY: {
    REGULAR: "Roboto_400Regular",
    MEDIUM: "Roboto_500Medium",
    BOLD: "Roboto_700Bold",
    BLACK: "Roboto_900Black",
  },

  FONT_SIZE: {
    S_7: 14,
    S_8: 16,
    S_9: 18,
    S_10: 20,
    S_11: 22,
    S_12: 24,
    S_14: 28,
    S_16: 32,
  },

  styles: StyleSheet.create({
    primaryShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  }),
};
