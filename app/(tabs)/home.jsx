import { StyleSheet, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text title={true} style={styles.heading}>
        Your Reading List
      </Text>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})