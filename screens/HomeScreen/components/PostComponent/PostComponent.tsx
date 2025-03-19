import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './PostComponent.styles';

const PostComponent = ({ post }) => {
  return (
    <View style={styles.post}>
      <View style={styles.post_header}>
        <Image source={post.img_src} style={styles.profile_image} />
        <View style={styles.post_header_text}>
          <Text style={styles.post_username}>{post.username}</Text>
          <Text style={styles.post_place}>{post.place}</Text>
        </View>
      </View>
      <Image source={post.post_src} style={styles.post_image} />
      <View style={styles.post_caption}>
        <Text>{post.caption}</Text>
      </View>
    </View>
  );
};

export default PostComponent;