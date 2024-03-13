import { useState, useEffect, } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen'
import ReleasePage from './ReleasePage';
import About from './About';
import NowPlayingContext from './NowPlayingContext';
import { Audio } from 'expo-av';

const Stack = createNativeStackNavigator();

const blackHeader = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: '#000',
        text: '#000',
    },
};

export default function Navigation() {
    const [sound, setSound] = useState()
    const [nowPlaying, setPlaying] = useState()

    const homeButton = ({ navigation }) => ({
        headerLeft: () => (
            <TouchableOpacity onPress={() => {navigation.navigate('HomeScreen'), setSound()}}><Icon
                name='home'
                type='font-awesome'
                color='#80aaed'
            /></TouchableOpacity>
    
        ),
    })
    
    async function playSound(path) {
        console.log('Loading...');
        const { sound } = await Audio.Sound.createAsync(path);
        setSound(sound);
        console.log('Playing');
        await sound.playFromPositionAsync(5000);
        // await sound.playAsync();
        sound.setIsLoopingAsync(true) 
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
        <NowPlayingContext.Provider value={{ setSound, playSound, nowPlaying, setPlaying }}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer theme={blackHeader}>
                    <Stack.Navigator >
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        <Stack.Screen name="ReleasePage" component={ReleasePage} options={homeButton} />
                        <Stack.Screen name="About" component={About} options={homeButton}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </GestureHandlerRootView>
        </NowPlayingContext.Provider>
    );
}