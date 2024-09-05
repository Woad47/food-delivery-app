import { View, TextInput, StyleSheet } from "react-native"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useState } from "react"

export default function SearchBar() {
  const [inputText, setInputText] = useState("")
  return (
    <View style={styles.container}>
      <FontAwesome6 name='magnifying-glass' size={20} color='#000A' />
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
        placeholder='Search'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0001",
    width: "90%",
    margin: 35,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "600",
    width: "85%",
  },
})
