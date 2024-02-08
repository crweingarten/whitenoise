import { StyleSheet, Text, View } from 'react-native';

export default function Logo() {

  return (
    <View>
      <Text style={styles.logo}>fu<Text style={styles.sleep}>zzz</Text>el</Text>
      <Text style={styles.copy}>artisinal white noise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },

  logo: {
    height: '18%',
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
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
