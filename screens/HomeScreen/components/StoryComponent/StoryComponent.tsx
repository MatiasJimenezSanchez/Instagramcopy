import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './StoryComponent.styles';

const StoryComponent = ({ story }) => {
  const [seen, setSeen] = useState(false); // Estado inicial de las historias como no vistas

  const handlePress = () => {
    setSeen(true);
  };

  return (
    <TouchableOpacity style={styles.story} onPress={handlePress}>
      {seen ? (
        <View style={styles.story_seen}>
          <Image source={story.img_src} style={styles.story_image} />
        </View>
      ) : (
        <View style={styles.story_unseen}>
          <Image source={story.img_src} style={styles.story_image} />
        </View>
      )}
      <Text style={styles.story_username}>{story.username}</Text>
    </TouchableOpacity>
  );
};

export default StoryComponent;