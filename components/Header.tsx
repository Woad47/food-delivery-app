import { Image, StyleSheet, View, Text } from "react-native"
import Feather from "@expo/vector-icons/Feather"

const itemsQty = 3

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={styles.cartIconContainer}>
        <Feather name='shopping-bag' size={24} color='white' />
        <Text style={styles.cartQuantity}>{itemsQty}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  cartIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f60",
    padding: 20,
    borderRadius: 20,
    gap: 15,
  },
  cartQuantity: {
    color: "white",
    fontWeight: "bold",
  },
  //Resume here, edit cart icon container text (white, bold, ect)
})
