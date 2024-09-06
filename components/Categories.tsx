import { ScrollView, StyleSheet, View } from "react-native"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { useState } from "react"

export default function Categories() {
  const [selectedCategorie, setSelectedCategorie] = useState(0)

  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View
        id='1'
        style={[
          styles.iconContainer,
          selectedCategorie === 1 ? styles.iconContainerSelected : {},
        ]}
        onTouchStart={() => setSelectedCategorie(1)}
      >
        <MaterialCommunityIcons
          name='hamburger'
          size={35}
          color={selectedCategorie === 1 ? "#FFFE" : "#000C"}
        />
      </View>
      <View
        id='2'
        style={[
          styles.iconContainer,
          selectedCategorie === 2 ? styles.iconContainerSelected : {},
        ]}
        onTouchStart={() => setSelectedCategorie(2)}
      >
        <MaterialCommunityIcons
          name='french-fries'
          size={35}
          color={selectedCategorie === 2 ? "#FFFE" : "#000C"}
        />
      </View>
      <View
        id='3'
        style={[
          styles.iconContainer,
          selectedCategorie === 3 ? styles.iconContainerSelected : {},
        ]}
        onTouchStart={() => setSelectedCategorie(3)}
      >
        <MaterialIcons
          name='icecream'
          size={35}
          color={selectedCategorie === 3 ? "#FFFE" : "#000C"}
        />
      </View>
      <View
        id='4'
        style={[
          styles.iconContainer,
          selectedCategorie === 4 ? styles.iconContainerSelected : {},
        ]}
        onTouchStart={() => setSelectedCategorie(4)}
      >
        <MaterialIcons
          name='local-drink'
          size={35}
          color={selectedCategorie === 4 ? "#FFFE" : "#000C"}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    maxHeight: 65,
  },
  iconContainer: {
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: "#0001",
    borderRadius: 20,
  },
  iconContainerSelected: {
    //Resume here madre the icons and container change the color on click dinamically
    backgroundColor: "#000C",
  },
})
