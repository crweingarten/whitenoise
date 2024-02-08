import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import catalog from './Catalog'
import Logo from './Logo'
import MusicPlayer from './MusicPlayer'

export default function HomeScreen({ navigation }) {

  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <Logo />
      <MusicPlayer catalog={catalog} navigation={navigation} />
      <TouchableOpacity
        onPress={() => navigate('About')}>
        <Text style={styles.about}>about</Text>
      </TouchableOpacity>
      <Text style={styles.legal}>fuzzzel v. 1.0.0 © 2024 1000timesapps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  about: {
    color: '#80aaed',
    fontFamily: 'Menlo-Bold',
    letterSpacing: 12,
    paddingTop: 30
  },

  legal: {
    color: '#fff',
    fontFamily: 'Menlo',
    letterSpacing: 2,
    paddingTop: 100,
    fontSize: 8
  },
});
