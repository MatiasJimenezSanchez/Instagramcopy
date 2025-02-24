import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { PostComponent, StoryComponent } from 'components';
import styles from 'HomeScreen.styles';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top_bar}>
        <Text>Top Bar</Text>
      </View>

      <View style={styles.stories_container}>
        <Text>Stories Container</Text>
      </View>

      <View style={styles.posts_container}>
        <Text>Posts Container</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}


