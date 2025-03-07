import { ScrollView, StyleSheet, View, Text } from "react-native"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { useState } from "react"
import colors from "@/assets/themes/lightThemeColors"

export default function Categories(props: { setSubCategoryIndex: any }) {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const categoriesArray: string[][] = [
    //First stringin each array is name of the icon
    //Second string is the name of the category that will be displayed to the user
    ["hamburger", "Food"],
    ["french-fries", "Snacks"],
    ["food-croissant", "Desserts"],
    ["bottle-soda-classic-outline", "Drinks"],
  ]

  //Returns a View containing an icon and the name of the category
  //"category" is an array of 2 strings first one is the name of the icon second one is the name of the category
  //index: Array index needed to indentify the current selected category

  //Resume here trying to set the category index and pass it to the sub categories component to change the options showing

  function returnIconComponent(category: any[], index: any) {
    return (
      <View key={index} style={styles.iconContainer}>
        <View
          style={[
            styles.icon,
            selectedCategory === index ? styles.iconContainerSelected : {},
          ]}
          onTouchStart={() => {
            setSelectedCategory(index)
            props.setSubCategoryIndex(index)
          }}
        >
          <MaterialCommunityIcons
            name={category[0]}
            size={35}
            color={selectedCategory === index ? colors.white : colors.black}
          />
        </View>
        <Text style={styles.iconText}>{category[1]}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {categoriesArray.map(returnIconComponent)}
      </ScrollView>
      <View style={styles.categoryTitleContainer}>
        <Text style={styles.categoryTitle}>
          {categoriesArray[selectedCategory][1] + " Menu"}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
  },
  icon: {
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: colors.gray,
    borderRadius: 20,
    marginBottom: 10,
  },
  iconContainerSelected: {
    backgroundColor: colors.black,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    fontWeight: "600",
    color: colors.black,
  },
  categoryTitle: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "600",
  },
  categoryTitleContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingTop: 30,
  },
})
