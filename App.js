import { StyleSheet, Text, View } from 'react-native';
import catalog from './src/Catalog'
import MusicPlayer from './src/MusicPlayer'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>oblivionizer</Text>
      <MusicPlayer catalog={catalog}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
