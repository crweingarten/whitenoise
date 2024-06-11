import { StyleSheet } from 'react-native';

const fuzzBlack = '#141414'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: fuzzBlack,
    },

    logo: {
        color: 'white',
        fontFamily: 'ArialRoundedMTBold',
        letterSpacing: 10,
        fontSize: 70,
        fontWeight: '900',
        textAlign: 'center',
    },

    copy: {
        color: 'white',
        fontFamily: 'ArialMT',
        fontSize: 15,
        letterSpacing: 2,
        textAlign: 'center',
        padding: 8,
        fontWeight: '450'
    },

    artist: {
        color: 'white',
        fontFamily: 'ArialMT',
        fontStyle: 'italic',
        letterSpacing: 2,
        fontSize: 14,
        fontWeight: '200',
        opacity: '0.9',
        alignSelf: 'flex-end',
        paddingTop: 5,
        paddingBottom: 15,
        marginRight: 20
    },

    about: {
        fontFamily: 'ArialMT',
        letterSpacing: 12,
        paddingTop: 30,
        alignSelf: 'center',
        fontWeight: '600'
    },

    button: {
        width: '90%',
        height: 60,
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
        paddingTop: 10,
        width: '100%',
        backgroundColor: fuzzBlack,
        color: 'white',
        fontFamily: 'ArialMT',
        fontSize: 18,
        letterSpacing: 5,
        textAlign: 'right',
        fontWeight: '800'
    },

    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    modalView: {
        backgroundColor: fuzzBlack,
        padding: 30,
        width: '100%',
        height: '40%',

    },

    fuzzBlue: { color: '#B2D3FF' },
    fuzzBlack: fuzzBlack,
}


);

