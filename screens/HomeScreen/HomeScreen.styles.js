import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBackground,
  },
  top_bar: {
    marginTop: sizes.padding * 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: sizes.padding,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    height: sizes.padding * 5,
  },
  logo: {
    width: sizes.logoWidth,
    height: sizes.logoHeight,
    resizeMode: 'contain',
  },
  icon_group: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: sizes.padding,
  },
  stories_container: {
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.padding,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  posts_container: {
    paddingHorizontal: sizes.padding,
    flex: 8,
    marginTop: 0,
  },
  tab_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    height: sizes.padding * 5,
  },
  lightContainer: {
    backgroundColor: colors.lightBackground,
  },
  darkContainer: {
    backgroundColor: colors.darkBackground,
  },
  lightThemeText: {
    color: colors.lightText,
  },
  darkThemeText: {
    color: colors.darkText,
  },
  profile_icon: {
    width: sizes.profileIconSize,
    height: sizes.profileIconSize,
    borderRadius: sizes.borderRadius,
    borderWidth: 0,
  },
});

export default styles;