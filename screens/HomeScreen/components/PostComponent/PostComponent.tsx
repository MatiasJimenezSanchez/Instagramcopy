import React from 'react';
import { View, Image, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import styles from './PostComponent.styles';

const PostComponent = ({ post, likedByUser }) => {
  return (
    <View style={styles.post}>
      <View style={styles.post_header}>
        <Image source={post.img_src} style={styles.profile_image} />
        <View style={styles.post_header_text}>
          <Text style={styles.post_username}>{post.username}</Text>
          <Text style={styles.post_place}>{post.place}</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={24} color="gray" style={styles.dots_icon} />
      </View>
      <Image source={post.post_src} style={styles.post_image} />
      <View style={styles.icons_container}>
        <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
        <FontAwesome5 name="comment" size={24} color="black" style={styles.icon} />
        <SimpleLineIcons name="paper-plane" size={24} color="black" style={styles.icon} />
        <Entypo name="dots-three-horizontal" size={24} color="gray" style={styles.centered_dots_icon} />
        <Feather name="bookmark" size={24} color="black" style={[styles.icon, styles.bookmark_icon]} />
      </View>
      <View style={styles.likes_container}>
        <Image source={post.img_src} style={styles.likes_image} />
        <Text style={styles.likes_text}>Liked by {likedByUser} and {post.likes} others</Text>
      </View>
      <Text style={styles.post_caption}>
        <Text style={styles.post_username}>{post.username} </Text>
        {post.caption}
      </Text>
    </View>
  );
};

export default PostComponent;