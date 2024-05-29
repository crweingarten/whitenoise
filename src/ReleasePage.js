import { useContext, useState } from 'react';
import { Image, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import NowPlayingContext from './NowPlayingContext';
import catalog from './Catalog'
import { styles } from './styles'


export default function ReleasePage({ route, navigation }) {
    const { navigate } = navigation;
    const { track } = route.params;
    const { setSound, playSound, nowPlaying, setPlaying } = useContext(NowPlayingContext);
    const [modalVisible, setModalVisible] = useState(false);

    const swipeLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(() => {
        const nextUp = catalog.find((track) => track.cat === Number(nowPlaying.cat + 1));
        if (Number(nowPlaying.cat) < catalog.length) {
            setPlaying(nextUp);
            playSound(nextUp.path)
            navigate('ReleasePage', { track: nextUp })
        }
        else {
            navigate('HomeScreen')
            setSound()
        }
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
            <Pressable onPress={() => { setModalVisible(true) }}>
                <Text style={styles.nowPlaying}>{nowPlaying.artist}</Text>
                <Text style={[styles.nowPlaying, { fontFamily: 'Menlo', fontSize: 14 }]}>"{nowPlaying.title}"</Text>
                <Text style={styles.nowPlaying}> <Icon
                    name='info-circle'
                    type='font-awesome'
                    color='#80aaed'
                    style={{ paddingTop: 15, paddingRight: 10 }}
                /></Text>
            </Pressable>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onBackdropPress={() => this.setModalVisible(false)}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >

                    <Pressable style={styles.centeredView}
                        onPress={() => {setModalVisible(!modalVisible)
                            console.log("close")}
                            
                        }>





                        <View style={styles.modalView}>

                            <Text><Icon
                                name='close'
                                type='font-awesome'
                                color='#80aaed'
                            /></Text>

                            <ScrollView>
                                <Text style={styles.copy}>{nowPlaying.info}</Text>
                                <Text style={[styles.copy, { color: '#80aaed', alignSelf: 'flex-end' }]}>
                                    — {nowPlaying.artist}</Text></ScrollView>

                        </View>



                    </Pressable>
                </Modal>
            </View>
        </View>
    );
}