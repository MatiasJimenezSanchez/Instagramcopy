import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import sizes from '../../../constants/sizes';

const styles = StyleSheet.create({
  post: {
    width: '100%',
    marginBottom: sizes.padding * 2,
  },
  post_header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.padding / 2,
  },
  profile_image: {
    width: sizes.profileIconSize,
    height: sizes.profileIconSize,
    borderRadius: sizes.profileIconSize / 2,
    marginRight: sizes.padding,
  },
  post_header_text: {
    flex: 1,
  },
  post_username: {
    fontWeight: 'bold',
    color: colors.black,
  },
  post_place: {
    color: colors.secondary,
    fontSize: 12,
  },
  post_image: {
    width: '100%',
    height: 400,
  },
  post_caption: {
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.padding / 2,
  },
});

export default styles;