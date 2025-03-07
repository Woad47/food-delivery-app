import {
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import colors from "@/assets/themes/lightThemeColors"
import { useState } from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import Feather from "@expo/vector-icons/Feather"

interface ModalProps {
  showModal: boolean
  toggleModal: Function
  subCategoryTittle: string
  items: [
    {
      tag: string
      weight: string
      price: number
      description: string
      image: any
      keyWord: string
    }
  ]
}

const sortOptions = [
  "All",
  "Popular",
  "New Items",
  "Hot Deals",
  "Other Options",
]

export default function ItemsDisplayModal(props: ModalProps): JSX.Element {
  const [items, setItems] = useState(props.items)
  const [selectedItem, setSelectedItem] = useState(props.items[0])
  const [focusItem, setFocusItem] = useState(0)
  const [focusSort, setFocusSort] = useState(0)
  const [isFav, setIsFav] = useState(false)

  const handleSortItems = (keyWord: string) => {
    if (keyWord === "All") {
      setItems(props.items)
      setSelectedItem(props.items[0])
      setFocusItem(0)
      setIsFav(false)
      return
    }

    let filteredItems: [
      {
        tag: string
        weight: string
        price: number
        description: string
        image: any
        keyWord: string
      }
    ] = props.items.filter((item) => item.keyWord === keyWord.toLowerCase())
    setItems(filteredItems)
    setSelectedItem(filteredItems[0])
    setFocusItem(0)
    setIsFav(false)
  }

  return (
    <Modal visible={props.showModal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButtonContainer}>
            <Pressable style={styles.backButton} onPress={props.toggleModal}>
              <Ionicons name='chevron-back' size={24} color='black' />
            </Pressable>
          </View>
          <View style={styles.subCategoryTitleContainer}>
            <Text style={styles.subCategoryTitle}>
              {props.subCategoryTittle}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            {/*Empty view to center the items of the header properly*/}
          </View>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.quickSortContainer}
            showsHorizontalScrollIndicator={false}
          >
            {sortOptions.map((option, index) => (
              <View
                key={index}
                onTouchEnd={() => {
                  setFocusSort(index)
                  handleSortItems(option)
                }}
              >
                <Text
                  style={[
                    styles.quickSortText,
                    index === focusSort && styles.quickSortSelected,
                  ]}
                >
                  {option}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bodyContainer}>
          <View contentContainerStyle={styles.imageListContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {items.map !== undefined ? (
                items.map((item: {}, index: number) => (
                  <View
                    key={index + item.tag}
                    onTouchEnd={() => {
                      setSelectedItem(items[index])
                      setFocusItem(index)
                      setIsFav(false)
                    }}
                    style={[
                      styles.previewImageContainer,
                      index === focusItem &&
                        styles.previewImageContainerSelected,
                    ]}
                  >
                    <Image style={styles.previewImage} source={item.image} />
                  </View>
                ))
              ) : (
                <Text>No item selected</Text>
              )}
            </ScrollView>
          </View>
          <ScrollView
            style={styles.itemInfoContainer}
            showsVerticalScrollIndicator={false}
          >
            {isFav ? (
              <View
                style={styles.favIconContainer}
                onTouchEnd={() => setIsFav((prevState) => !prevState)}
              >
                <Ionicons name='heart' size={24} color={colors.orange} />
              </View>
            ) : (
              <View
                style={styles.favIconContainer}
                onTouchEnd={() => setIsFav((prevState) => !prevState)}
              >
                <Ionicons
                  name='heart-outline'
                  size={24}
                  color={colors.darkerGray}
                />
              </View>
            )}
            <Image
              style={styles.selectedItemImage}
              source={selectedItem.image}
            />
            <View>
              <Text style={styles.itemTag}>{selectedItem.tag}</Text>
              <Text style={styles.itemWeight}>
                Weight - {selectedItem.weight}
              </Text>
              <Text style={styles.itemPrice}>${selectedItem.price}</Text>
              <Text style={styles.itemDescription}>
                {selectedItem.description}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.addToCartButtom}>
        <Feather name='shopping-bag' size={24} color={colors.white} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  selectedItemImage: {
    height: 200,
    width: 200,
  },
  imageListContainer: {
    flex: 1,
  },
  previewImageContainer: {
    padding: 10,
    borderRadius: 25,
    marginBottom: 5,
  },
  previewImageContainerSelected: {
    backgroundColor: colors.gray,
  },
  previewImage: {
    height: 75,
    width: 75,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
  },
  backButtonContainer: {
    flex: 1,
  },
  backButton: {
    width: "50%",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 15,
  },
  subCategoryTitleContainer: {
    flex: 1,
  },
  subCategoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  quickSortContainer: {
    justifyContent: "space-around",
    marginBottom: 30,
  },
  quickSortText: {
    color: colors.darkerGray,
    paddingBottom: 5,
    marginHorizontal: 15,
  },
  quickSortSelected: {
    color: colors.black,
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderColor: colors.orange,
  },
  itemInfoContainer: {
    flex: 2,
    marginHorizontal: 30,
  },
  favIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 5,
  },
  itemTag: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.black,
  },
  itemWeight: {
    fontSize: 15,
    color: colors.darkerGray,
  },
  itemPrice: {
    fontSize: 40,
    color: colors.orange,
  },
  itemDescription: {
    color: colors.black,
    fontSize: 15,
  },
  addToCartButtom: {
    position: "absolute",
    backgroundColor: colors.orange,
    width: 90,
    height: 90,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    bottom: 0,
  },
})
