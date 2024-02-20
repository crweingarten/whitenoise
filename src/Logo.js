import { StyleSheet, Text, View } from 'react-native';

export default function Logo() {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>fu<Text style={styles.sleep}>zzz</Text>el</Text>
      <Text style={styles.copy}>artisanal white noise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  logo: {
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    paddingTop: 40,
    fontFamily: 'Sniglet-Regular',
    fontSize: 40
  },

  sleep: {
    color: '#80aaed',
  },

  copy: {
    height: '15%',
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Menlo-Bold',
    fontSize: 14,
    letterSpacing: 12,
    textAlign: 'center',
  }
});
