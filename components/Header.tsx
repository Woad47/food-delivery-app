import { Image, StyleSheet, View, Text } from "react-native"
import Feather from "@expo/vector-icons/Feather"
import colors from "@/assets/themes/lightThemeColors"

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
        <Feather name='shopping-bag' size={24} color={colors.white} />
        <Text style={styles.cartQuantity}>{itemsQty}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 55,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  cartIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.orange,
    padding: 20,
    borderRadius: 20,
    gap: 15,
  },
  cartQuantity: {
    color: colors.white,
    fontWeight: "bold",
  },
})
