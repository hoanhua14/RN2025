// import { StyleSheet, Text, View, Button } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>another</Text>
//       <View style={{ backgroundColor: "blue", margin: "25" }}>
//         <Text>Testing!</Text>
//       </View>
//       <Button title="Click" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal!" style={styles.textInput} />
        <Button title="ADD GOAL" />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
});
