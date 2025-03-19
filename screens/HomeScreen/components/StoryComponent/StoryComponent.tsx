import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import sizes from '../../../constants/sizes';

const styles = StyleSheet.create({
  story: {
    alignItems: 'center',
    marginHorizontal: sizes.padding / 2,
  },
  story_unseen: {
    width: sizes.storySize,
    height: sizes.storySize,
    borderRadius: sizes.storySize / 2,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  story_seen: {
    width: sizes.storySize,
    height: sizes.storySize,
    borderRadius: sizes.storySize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  story_image: {
    width: sizes.storyImageSize,
    height: sizes.storyImageSize,
    borderRadius: sizes.storyImageSize / 2,
    borderWidth: 0.5,
    borderColor: colors.white,
  },
  story_username: {
    marginTop: sizes.padding / 2,
    fontSize: 12,
    color: colors.black,
  },
});

export default styles;