import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
    },

    logo: {
        color: 'white',
        fontFamily: 'Raleway-Bold',
        letterSpacing: 10,
        fontSize: 70,
        fontWeight: '900',
        alignSelf: 'flex-start',
    },

    copy: {
        color: 'white',
        fontFamily: 'Menlo-Bold',
        fontSize: 14,
        letterSpacing: 2,
        textAlign: 'center',
        padding: 8,
    },

    artist: {
        color: 'white',
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
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Menlo-Bold',
        fontSize: 18,
        letterSpacing: 5,
        textAlign: 'right',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    modalView: {
        backgroundColor: 'black',
        padding: 30,
        width: '100%',
        height: '60%'

    },

}


);

