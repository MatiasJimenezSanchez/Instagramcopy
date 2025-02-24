import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { HomeScreen } from './screens';
import styles from './app_styles';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />

      <StatusBar style="auto" />
    </View>
  );
}

