import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import catalog from './Catalog'
import Logo from './Logo'
import NowPlayingContext from './NowPlayingContext';
import { styles } from './styles'

export default function HomeScreen({ navigation }) {

  const { navigate } = navigation;
  const { playSound, setPlaying } = useContext(NowPlayingContext);

  function handlePress(track) {
    playSound(track.path)
    setPlaying(track)
    navigate('ReleasePage', { track: track })
  }

  const playButtons = catalog.map(track =>
    <><TouchableOpacity
      style={[styles.button, { backgroundColor: track.color }]}
      onPress={() => { handlePress(track) }}
      underlayColor='#000'
      key={track.cat}>
      <Text style={[styles.copy, { fontFamily: 'Menlo' }]}>{track.description}</Text>
    </TouchableOpacity>
      <Text style={styles.artist}>[by {track.artist}]</Text>
    </>
  );

  const legalStyle = {
    ...styles.copy,
    fontFamily: 'Menlo',
    fontSize: 8,
    paddingTop: 100,
  }

  return (
    <View style={styles.container}>
      <Logo/>
      {playButtons}
      <TouchableOpacity
        onPress={() => navigate('About')}>
        <Text style={styles.about}>about</Text>
      </TouchableOpacity>
      <Text style={legalStyle}>fuzzzel v. 1.0.0 © 2024 1000timesyes</Text>
    </View>
  );
}