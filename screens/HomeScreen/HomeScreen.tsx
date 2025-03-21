import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, useColorScheme } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import AppLoading from 'expo-app-loading';
import { useFonts, CedarvilleCursive_400Regular } from '@expo-google-fonts/cedarville-cursive';

import styles from './HomeScreen.styles';
import PostComponent from './components/PostComponent/PostComponent';
import StoryComponent from './components/StoryComponent/StoryComponent';
import colors from '../../constants/colors';

const stories = [
  { img_src: require('../../assets/profile_imgs/picture3.jpg'), username: 'ingmoon', seen: true },
  { img_src: require('../../assets/profile_imgs/picture4.jpg'), username: 'milk', seen: false },
  { img_src: require('../../assets/profile_imgs/picture5.jpg'), username: 'amaranthi', seen: true },
  { img_src: require('../../assets/profile_imgs/picture6.jpg'), username: 'amble_oak', seen: true },
  { img_src: require('../../assets/profile_imgs/picture3.jpg'), username: 'talisman', seen: true },
  { img_src: require('../../assets/profile_imgs/picture4.jpg'), username: 'an_notes', seen: false },
  { img_src: require('../../assets/profile_imgs/picture5.jpg'), username: 'aquamarine_eclipse', seen: true },
];

const posts = [
  { img_src: require('../../assets/profile_imgs/picture3.jpg'), post_src: require('../../assets/posts_imgs/picture1.jpg'), likes: 10, comments: 2, caption: 'No vivas a medias, equivócate bien.', username: 'alluring_moon', place: 'Tokyo, Japan' },
  { img_src: require('../../assets/profile_imgs/picture4.jpg'), post_src: require('../../assets/posts_imgs/picture2.jpg'), likes: 20, comments: 3, caption: 'Quien no arriesga, no gana.', username: 'almond_milk', place: 'Paris, France' },
];

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    CedarvilleCursive_400Regular,
  });

  const colorScheme = useColorScheme();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const extendedStories = [];
  const extendedPosts = [];

  for (let i = 0; i < 8; i++) {
    extendedStories.push(...stories);
    extendedPosts.push(...posts);
  }

  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View style={styles.top_bar}>
        <MaterialCommunityIcons name="camera-outline" size={30} color={colors.black} />
        <Image source={require('../../assets/profile_imgs/Instagram_logo.svg.png')} style={styles.logo} />
        <View style={styles.icon_group}>
          <Feather name="tv" size={30} color={colors.black} style={styles.icon} />
          <SimpleLineIcons name="paper-plane" size={30} color={colors.black} style={styles.icon} />
        </View>
      </View>

      <ScrollView horizontal={true} style={styles.stories_container} showsHorizontalScrollIndicator={false}>
        {extendedStories.map((story, index) => (
          <StoryComponent key={index} story={story} />
        ))}
      </ScrollView>

      <View style={styles.posts_container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {extendedPosts.map((post, index) => (
            <PostComponent key={index} post={post} likedByUser={extendedStories[index % extendedStories.length].username} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.tab_container}>
        <MaterialIcons name="home-filled" size={30} color={colors.black} />
        <MaterialIcons name="search" size={30} color={colors.black} />
        <Feather name="plus-square" size={30} color={colors.black} />
        <AntDesign name="hearto" size={30} color={colors.black} />
        <Image source={require('../../assets/profile_imgs/picture3.jpg')} style={styles.profile_icon} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}