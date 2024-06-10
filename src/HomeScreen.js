import { Text, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
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
    <View key={track.cat}>
      <TouchableOpacity onPress={() => { handlePress(track) }}>
        <LinearGradient
          colors={track.color}
          style={[styles.button]}>
          <Text style={styles.copy}>{track.description}</Text></LinearGradient>
      </TouchableOpacity>
      <Text style={styles.artist}>[by {track.artist}]</Text>
    </View >
  );

  const legalStyle = {
    ...styles.copy,
    fontSize: 9,
    opacity: '0.5',
    paddingTop: 50,
  }

  return (

    <View style={styles.container}>
      <Logo />
      {playButtons}
      <TouchableOpacity
        onPress={() => navigate('About')}>
        <Text style={[styles.about, styles.fuzzBlue]}>about</Text>
      </TouchableOpacity>
      <Text style={legalStyle}>fuzzzel v. 1.0.0 © 2024 1000timesyes</Text>
    </View >

  );
}