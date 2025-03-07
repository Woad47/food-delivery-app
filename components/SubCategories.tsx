import { ImageBackground, Modal, StyleSheet, Text, View } from "react-native"
import colors from "@/assets/themes/lightThemeColors"
import { Fragment, ReactNode, useState } from "react"
import images from "../assets/images/images"
import items from "../assets/items/items"
import ItemsDisplayModal from "./ItemsDisplayModal"

function SubCategoryCard(
  subCategoryTitle: string,
  index: number,
  style: object,
  onTouch: any
) {
  return (
    <View key={index} style={style} onTouchEnd={onTouch}>
      <ImageBackground
        source={images[subCategoryTitle]}
        style={styles.backgroundImage}
        resizeMode='center'
      >
        <Text style={styles.subCategoryTitle}>{subCategoryTitle}</Text>
      </ImageBackground>
    </View>
  )
}

export default function SubCategories(props: { subCategoryIndex: number }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedSubcategory, setSelectedSubcategory] = useState("")
  let cardSize: boolean = true //Determines which style would be used to render the next card
  let isSecondColumn: boolean = false
  let secondSlice: string[] = []
  let firstSlice: string[] = []

  const subCategoriesArray: string[][] = [
    ["Pizza", "BBQ", "Sushi", "Burgers"],
    [],
    [],
    [],
  ]

  if (subCategoriesArray[props.subCategoryIndex].length > 0) {
    firstSlice = subCategoriesArray[props.subCategoryIndex].slice(
      0,
      Math.ceil(subCategoriesArray.length / 2)
    )
    secondSlice = subCategoriesArray[props.subCategoryIndex].slice(
      Math.ceil(subCategoriesArray.length / 2)
    )
  }

  const toggleModal = () => {
    setShowModal((prevState) => !prevState)
  }
  const createSubCategoryCard = (categoryTitle: string, index: number) => {
    cardSize = index === 0 && isSecondColumn ? false : cardSize
    isSecondColumn = true

    const cardStyle: object = {
      height: cardSize ? 220 : 170,
      width: "95%",
      backgroundColor:
        colors.cardBackgroundColors[
          Math.floor(Math.random() * colors.cardBackgroundColors.length)
        ],
      borderRadius: 25,
    }

    const handleOnTouch = () => {
      setSelectedSubcategory(categoryTitle)
      toggleModal()
    }

    const card: React.JSX.Element = SubCategoryCard(
      categoryTitle,
      index,
      cardStyle,
      handleOnTouch
    )

    cardSize = !cardSize

    return card
  }

  return (
    <View style={styles.container}>
      <View style={styles.subCategoriesContainer}>
        {firstSlice.length > 0 ? (
          <Fragment>
            <View style={styles.row}>
              {firstSlice.map(createSubCategoryCard)}
            </View>
            <View style={styles.row}>
              {secondSlice.map(createSubCategoryCard)}
            </View>
          </Fragment>
        ) : (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonText}>Coming soon!!!</Text>
          </View>
        )}
        <ItemsDisplayModal
          items={items.Food.Burgers}
          showModal={showModal}
          toggleModal={toggleModal}
          subCategoryTittle={selectedSubcategory}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  subCategoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    justifyContent: "center",
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 50,
  },
  row: {
    flex: 1,
    gap: 20,
  },
  subCategoryTitle: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  comingSoon: {
    alignItems: "center",
    justifyContent: "center",
    height: 355,
  },
  comingSoonText: {
    color: colors.darkerGray,
    fontSize: 25,
    fontWeight: "bold",
  },
})
