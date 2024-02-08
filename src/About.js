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
        <Text style={styles.copy}>fuzzzel is an ios white noise app created and curated by christopher weingarten.</Text>
        <Text style={styles.copy}>questions, comments or opportunities: <Text style={styles.sleep}>fuzzzel@gmail.com</Text></Text>
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
    height: '25%',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Menlo-Bold',
    fontSize: 14,
    letterSpacing: 2,
    textAlign: 'center',
  },

  sleep: {
    color: '#80aaed',
  },
});
