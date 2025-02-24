import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from 'StoryComponen.styles';


export default function StoryComponent() {
  return (
    <View style={styles.container}>
      <Text>Individual Story Screen</Text>
    </View>
  );
}

