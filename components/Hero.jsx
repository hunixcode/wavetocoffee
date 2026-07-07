import { View, Text, StyleSheet } from 'react-native'

export default function Hero() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
})
