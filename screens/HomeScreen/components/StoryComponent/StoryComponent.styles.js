import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  story: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  story_unseen: {
    width: 65,
    height: 65,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ff1493',
    alignItems: 'center',
    justifyContent: 'center',
  },
  story_seen: {
    width: 65,
    height: 65,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  story_image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  story_username: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default styles;