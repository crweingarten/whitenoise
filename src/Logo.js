import { Text, View } from 'react-native';
import { styles }from './styles'

export default function Logo() {

  const subheadStyle = {
    ...styles.copy,
    letterSpacing: 12,
    padding: 0,
    paddingBottom: 70
  }

  return (
    <View>
      <Text style={styles.logo}>fu<Text style={styles.sleep}>zzz</Text>el...</Text>
      <Text style={subheadStyle}>artisanal white noise</Text>
    </View>
  );
}