import { Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function newTab() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello!!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
