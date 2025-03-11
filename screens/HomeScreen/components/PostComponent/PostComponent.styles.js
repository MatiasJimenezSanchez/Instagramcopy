import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  post: {
    width: '100%',
    marginBottom: 20,
  },
  post_header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  profile_image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  post_header_text: {
    flex: 1,
  },
  post_username: {
    fontWeight: 'bold',
  },
  post_place: {
    color: '#888',
  },
  dots_icon: {
    marginLeft: 'auto',
  },
  post_image: {
    width: '100%',
    height: 400,
  },
  icons_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
  centered_dots_icon: {
    marginHorizontal: 50, 
    opacity: 0.5,
  },
  bookmark_icon: {
    marginLeft: 'auto',
  },
  likes_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  likes_image: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  likes_text: {
    fontSize: 12,
  },
  post_caption: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default styles;