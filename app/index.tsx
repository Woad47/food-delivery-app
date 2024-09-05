import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.indexContainer}>
        <Header />
        <SearchBar />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  indexContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fffa",
  },
})
