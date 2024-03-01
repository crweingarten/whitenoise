import { useContext } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import NowPlayingContext from './NowPlayingContext';
import catalog from './Catalog'
import { styles }from './styles'


export default function ReleasePage({ route, navigation }) {
    const { navigate } = navigation;
    const { track } = route.params;
    const { setSound, playSound, nowPlaying, setPlaying }  = useContext(NowPlayingContext); 

    const swipeLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(() => {
        const nextUp = catalog.find((track) => track.cat === Number(nowPlaying.cat + 1));
        if (Number(nowPlaying.cat) < catalog.length) {
            setPlaying(nextUp);
            playSound(nextUp.path)
            navigate('ReleasePage', { track: nextUp })
        }
        else { navigate('HomeScreen')
        setSound() }
    });
    const swipeRight = Gesture.Fling().direction(Directions.RIGHT).onEnd(() => {
        navigate('HomeScreen')
        setSound()
    });

    return (
        <View style={styles.container}>
            <GestureDetector gesture={Gesture.Simultaneous(swipeLeft, swipeRight)}>
                <Image style={styles.coverart} source={track.cover} />
            </GestureDetector>
            <Text style={styles.nowPlaying}>{nowPlaying.artist}</Text>
            <Text style={[styles.nowPlaying, {fontFamily: 'Menlo', fontSize: 14}]}>"{nowPlaying.title}"</Text>
        </View>
    );
}