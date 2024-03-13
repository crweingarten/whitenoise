import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        // alignItems: 'center',
    },

    logo: {
        color: '#fff',
        paddingTop: 40,
        fontFamily: 'Raleway-Bold',
        fontSize: 40,
        alignSelf: 'flex-start',
    },

    copy: {
        color: '#fff',
        fontFamily: 'Menlo-Bold',
        fontSize: 14,
        letterSpacing: 2,
        textAlign: 'center',
        padding: 8,
    },

    artist: {
        color: '#fff',
        fontFamily: 'Menlo',
        fontStyle: 'italic',
        letterSpacing: 2,
        fontSize: 12,
        alignSelf: 'flex-end',
        paddingTop: 5,
        paddingBottom: 15,
        marginRight: 20
    },

    sleep: {
        color: '#80aaed',
    },

    about: {
        color: '#80aaed',
        fontFamily: 'Menlo-Bold',
        letterSpacing: 12,
        paddingTop: 30,
        alignSelf: 'center'
    },

    button: {
        width: '90%',
        height: '7%',
        borderRadius: '25',
        marginTop: "1%",
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    coverart: {
        height: '80%',
        width: 'auto'
    },

    nowPlaying:
    {
        height: '4%',
        paddingTop: '1%',
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Menlo-Bold',
        fontSize: 18,
        letterSpacing: 5,
        textAlign: 'right',
    }

});

