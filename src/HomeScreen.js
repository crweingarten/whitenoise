import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import catalog from './Catalog'
import Logo from './Logo'
import NowPlayingContext from './NowPlayingContext';

export default function HomeScreen({ navigation }) {

  const { navigate } = navigation;
  const { playSound, setPlaying }  = useContext(NowPlayingContext); 

  function handlePress(track) {
    playSound(track.path)
    setPlaying(track)
    navigate('ReleasePage', { track: track })}

  const playButtons = catalog.map(track =>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {handlePress(track)}}
      underlayColor='#000'
      key={track.cat}>
      <Text style={styles.artist}>{track.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Logo />
      {playButtons}
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

  button: {
    backgroundColor: '#80aaed',
    width: '90%',
    height: '7%',
    borderRadius: '25',
    marginTop: "1%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  artist: {
    color: '#fff',
    fontFamily: 'Menlo',
    letterSpacing: 2,
  }
});
