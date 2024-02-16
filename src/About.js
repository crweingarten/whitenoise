import { StyleSheet, Text, View } from 'react-native';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Logo from './Logo'

export default function About({ route, navigation }) {

  const { navigate } = navigation;
  const swipeLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(() => navigate('HomeScreen'))
  const swipeRight = Gesture.Fling().direction(Directions.RIGHT).onEnd(() => {
    navigate('HomeScreen')
});

  return (
      <View style={styles.container}>
        <Logo/>
        <GestureDetector gesture={Gesture.Simultaneous(swipeLeft, swipeRight)}>
          <View >
        <Text style={styles.copy}>fuzzzel is a bespoke ios white noise app featuring some of our favorite musicians and sound artists</Text>
        <Text style={styles.copy}>though these sounds are intended to be utilitarian, we put no limitations nor preference on how you should enjoy them. </Text>
        <Text style={styles.copy}>feel free to use fuzzzel for background noise, sleep aid, meditation, concentration, home atmosphere, deep listening, party compliment or simply part of your everyday music rotation.</Text>
        <Text style={styles.copy}>questions, comments or opportunities:{"\n"} <Text style={styles.sleep}>fuzzzel@gmail.com{"\n"}@1000TimesYes</Text></Text>
        </View></GestureDetector>
      </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    textColor: 'fff',
    alignItems: 'center',
  },

  copy: {
    // height: '15%',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Menlo-Bold',
    fontSize: 14,
    letterSpacing: 2,
    textAlign: 'center',
    padding: 8,
  },

  sleep: {
    color: '#80aaed',
  },
});
