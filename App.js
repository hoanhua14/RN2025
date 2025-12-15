import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>another</Text>
      <View style={{ backgroundColor: "red", margin: "25" }}>
        <Text>Testing!</Text>
      </View>
      <Button title="Click" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
