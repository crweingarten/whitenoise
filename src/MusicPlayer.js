import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function MusicPlayer(props) {

  const { navigate } = props.navigation;

  function handlePress(track) {
    // playSound(track.path)
    navigate('ReleasePage', { track: track })
  }

  const playButtons = props.catalog.map(track =>

    <TouchableOpacity
      style={styles.button}
      onPress={() => handlePress(track)}
      underlayColor='#000'
      key={track.cat}>
      <Text style={styles.artist}>{track.artist}</Text>
    </TouchableOpacity>

  );

  const [sound, setSound] = useState();

  async function playSound(path) {
    console.log('Loading...');
    const { sound } = await Audio.Sound.createAsync(path);
    setSound(sound);
    console.log('Playing');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    playButtons
  )
}

const styles = StyleSheet.create({

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
