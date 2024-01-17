import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

export default function MusicPlayer(props) {

  const playButtons = props.catalog.map(track =>
    <TouchableOpacity
      style={styles.button}
      onPress={() => playSound(track.path)}
      underlayColor='#00F'
      key={track.cat}>
      <Text style={{ color: '#fff' }}>{track.artist}</Text>
    </TouchableOpacity>
  );

  const [sound, setSound] = useState();

  async function playSound(path) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(path);
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
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
    backgroundColor: '#00F',
    textColor: '#fff',
    width: '90%',
    height: '7%',
    borderRadius: '25',
    marginTop: "1%",
    alignItems: 'center',
    justifyContent: 'center'

  },
});
