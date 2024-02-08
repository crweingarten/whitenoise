import { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import catalog from './Catalog'



export default function ReleasePage({ route, navigation }) {
    const { navigate } = navigation;
    const { track } = route.params;
    const [nowPlaying, setPlaying] = useState(track);


    const swipeLeft = Gesture.Fling().direction(Directions.LEFT).onEnd((e) => {
        const nextUp = catalog.find((track) => track.cat === Number(nowPlaying.cat + 1));
        if (Number(nowPlaying.cat) < catalog.length) {
            setPlaying(nextUp);
            navigate('ReleasePage', { track: nextUp })}
        else { navigate('HomeScreen') }
    });
    const swipeRight = Gesture.Fling().direction(Directions.RIGHT).onEnd((e) => {
        navigate('HomeScreen')
    });


    return (
        <View style={styles.container}>
        <GestureDetector gesture={Gesture.Simultaneous(swipeLeft, swipeRight)}>
           <Image style={{height: "85%"}} source={track.cover}/>
        </GestureDetector>
        <Text style={styles.artist}>{nowPlaying.artist}</Text>
        <Text style={styles.title}>"{nowPlaying.title}"</Text>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    artist: { height: '4%',
    paddingTop: '1%',
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Menlo-Bold',
    fontSize: 18,
    letterSpacing: 5,
    textAlign: 'right',},

    title: { height: '4%',
    paddingTop: '1%',
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Menlo',
    fontSize: 14,
    letterSpacing: 5,
    textAlign: 'right',}
});