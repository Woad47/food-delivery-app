import Categories from "@/components/Categories"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import colors from "@/assets/themes/lightThemeColors"
import SubCategories from "@/components/SubCategories"
import { useState } from "react"

export default function Index() {
  const [subCategoryIndex, setSubCategoryIndex] = useState(0)

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar
          animated={true}
          barStyle='dark-content'
          backgroundColor={colors.white}
          showHideTransition='fade'
          hidden={false}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.indexContainer}>
            <Header />
            <SearchBar />
            <Categories setSubCategoryIndex={setSubCategoryIndex} />
            <SubCategories subCategoryIndex={subCategoryIndex} />
          </View>
        </ScrollView>
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
    backgroundColor: colors.darkerWhite,
  },
})
