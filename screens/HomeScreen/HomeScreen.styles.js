import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top_bar: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  icon_group: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  stories_container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1, 
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  posts_container: {
    paddingHorizontal: 10,
    flex: 8,
    paddingHorizontal: 10,
    marginTop: 0, 
  },
  tab_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 50,
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  story_border: {
    width: 65,
    height: 65,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ff1493',
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
  post: {
    width: '100%',
    marginBottom: 20,
  },
  post_image: {
    width: '100%',
    height: 400,
  },
  post_caption: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: 'white',
  },
  profile_icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0,
  },
});

export default styles;