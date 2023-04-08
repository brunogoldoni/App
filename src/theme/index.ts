import { StyleSheet } from 'react-native';

export default {
  COLORS: {
    // PRIMARY_100: '#',

    // SECONDARY_100: '#',

    WHITE: '#FFFFFF',

    GRAY_100: '#F2F2F2',

    BLACK_900: '#000000'
  },

  FONT_FAMILY: {
    REGULAR: 'Roboto_400Regular',
    MEDIUM: 'Roboto_500Medium',
    BOLD: 'Roboto_700Bold',
    BLACK: 'Roboto_900Black'
  },

  FONT_SIZE: {
    S_7: 14,
    S_8: 16,
    S_9: 18,
    S_10: 20,
    S_12: 24,
    S_14: 28,
  },

  styles: StyleSheet.create({
    primaryShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  })
};
