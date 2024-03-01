import { Text, View } from 'react-native';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Logo from './Logo'
import { styles }from './styles'


export default function About({ navigation }) {

  const { navigate } = navigation;
  const swipeLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(() => navigate('HomeScreen'))
  const swipeRight = Gesture.Fling().direction(Directions.RIGHT).onEnd(() => {
    navigate('HomeScreen')
});

  return (
      <View style={styles.container}>
        <Logo/>
        <GestureDetector gesture={Gesture.Simultaneous(swipeLeft, swipeRight)}>
          <View style={{paddingTop: 100}}>
        <Text style={styles.copy}>fuzzzel is a bespoke ios white noise app and the world's first white noise record label.</Text>
        <Text style={styles.copy}>though these sounds are intended to be utilitarian, we offer no preference on how you should experience them. </Text>
        <Text style={styles.copy}>feel free to use fuzzzel for background noise, sleep aid, meditation, concentration, home atmosphere, deep listening, party accompaniment or part of your everyday music rotation.</Text>
        <Text style={styles.copy}>questions, comments, opportunities:{"\n"} <Text style={styles.sleep}>fuzzzel@gmail.com{"\n"}@1000TimesYes</Text></Text>
        </View></GestureDetector>
      </View> 
  );
}